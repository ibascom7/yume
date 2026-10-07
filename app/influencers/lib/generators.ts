import { ElementDefinition } from 'cytoscape';

export type NetworkType = 'erdos-renyi' | 'barabasi-albert' | 'watts-strogatz' | 'complete' | 'ring';

export interface NetworkParams {
  nodeCount: number;
  // Erdos-Renyi
  edgeProbability?: number;
  // Barabasi-Albert
  initialConnections?: number;
  // Watts-Strogatz
  neighborCount?: number;
  rewiringProbability?: number;
}

function createNode(id: number): ElementDefinition {
  return {
    data: {
      id: `n${id}`,
      opinion: Math.random(),
      stubbornness: 0.5,
    },
  };
}

function createEdge(source: number, target: number, weight = 1): ElementDefinition {
  return {
    data: {
      id: `e${source}-${target}`,
      source: `n${source}`,
      target: `n${target}`,
      weight,
    },
  };
}

export function generateErdosRenyi(params: NetworkParams): ElementDefinition[] {
  const { nodeCount, edgeProbability = 0.3 } = params;
  const elements: ElementDefinition[] = [];

  for (let i = 0; i < nodeCount; i++) {
    elements.push(createNode(i));
  }

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      if (Math.random() < edgeProbability) {
        elements.push(createEdge(i, j));
      }
    }
  }

  return elements;
}

export function generateBarabasiAlbert(params: NetworkParams): ElementDefinition[] {
  const { nodeCount, initialConnections = 2 } = params;
  const elements: ElementDefinition[] = [];
  const degrees: number[] = [];

  // Start with a small complete graph
  const m0 = Math.max(initialConnections + 1, 3);
  for (let i = 0; i < m0; i++) {
    elements.push(createNode(i));
    degrees[i] = m0 - 1;
  }
  for (let i = 0; i < m0; i++) {
    for (let j = i + 1; j < m0; j++) {
      elements.push(createEdge(i, j));
    }
  }

  // Add remaining nodes with preferential attachment
  for (let i = m0; i < nodeCount; i++) {
    elements.push(createNode(i));
    degrees[i] = 0;

    const totalDegree = degrees.reduce((a, b) => a + b, 0);
    const connected = new Set<number>();

    while (connected.size < initialConnections) {
      let r = Math.random() * totalDegree;
      for (let j = 0; j < i; j++) {
        r -= degrees[j];
        if (r <= 0 && !connected.has(j)) {
          connected.add(j);
          elements.push(createEdge(i, j));
          degrees[i]++;
          degrees[j]++;
          break;
        }
      }
    }
  }

  return elements;
}

export function generateWattsStrogatz(params: NetworkParams): ElementDefinition[] {
  const { nodeCount, neighborCount = 4, rewiringProbability = 0.3 } = params;
  const elements: ElementDefinition[] = [];
  const k = Math.floor(neighborCount / 2);

  for (let i = 0; i < nodeCount; i++) {
    elements.push(createNode(i));
  }

  // Create ring lattice
  const edges: Set<string> = new Set();
  for (let i = 0; i < nodeCount; i++) {
    for (let j = 1; j <= k; j++) {
      const target = (i + j) % nodeCount;
      const key = `${Math.min(i, target)}-${Math.max(i, target)}`;
      if (!edges.has(key)) {
        edges.add(key);
      }
    }
  }

  // Rewire edges
  const edgeList = Array.from(edges);
  for (let i = 0; i < edgeList.length; i++) {
    if (Math.random() < rewiringProbability) {
      const [source] = edgeList[i].split('-').map(Number);
      let newTarget: number;
      let attempts = 0;
      do {
        newTarget = Math.floor(Math.random() * nodeCount);
        attempts++;
      } while (
        (newTarget === source ||
          edges.has(`${Math.min(source, newTarget)}-${Math.max(source, newTarget)}`)) &&
        attempts < 100
      );

      if (attempts < 100) {
        edges.delete(edgeList[i]);
        edges.add(`${Math.min(source, newTarget)}-${Math.max(source, newTarget)}`);
      }
    }
  }

  for (const edge of edges) {
    const [source, target] = edge.split('-').map(Number);
    elements.push(createEdge(source, target));
  }

  return elements;
}

export function generateComplete(params: NetworkParams): ElementDefinition[] {
  const { nodeCount } = params;
  const elements: ElementDefinition[] = [];

  for (let i = 0; i < nodeCount; i++) {
    elements.push(createNode(i));
  }

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      elements.push(createEdge(i, j));
    }
  }

  return elements;
}

export function generateRing(params: NetworkParams): ElementDefinition[] {
  const { nodeCount } = params;
  const elements: ElementDefinition[] = [];

  for (let i = 0; i < nodeCount; i++) {
    elements.push(createNode(i));
  }

  for (let i = 0; i < nodeCount; i++) {
    elements.push(createEdge(i, (i + 1) % nodeCount));
  }

  return elements;
}

export function generateNetwork(type: NetworkType, params: NetworkParams): ElementDefinition[] {
  switch (type) {
    case 'erdos-renyi':
      return generateErdosRenyi(params);
    case 'barabasi-albert':
      return generateBarabasiAlbert(params);
    case 'watts-strogatz':
      return generateWattsStrogatz(params);
    case 'complete':
      return generateComplete(params);
    case 'ring':
      return generateRing(params);
    default:
      return generateErdosRenyi(params);
  }
}

export const NETWORK_OPTIONS: { value: NetworkType; label: string; description: string }[] = [
  { value: 'erdos-renyi', label: 'Erdos-Renyi', description: 'Random graph with edge probability p' },
  { value: 'barabasi-albert', label: 'Barabasi-Albert', description: 'Scale-free network (preferential attachment)' },
  { value: 'watts-strogatz', label: 'Watts-Strogatz', description: 'Small-world network' },
  { value: 'complete', label: 'Complete', description: 'Fully connected graph' },
  { value: 'ring', label: 'Ring', description: 'Circular lattice' },
];
