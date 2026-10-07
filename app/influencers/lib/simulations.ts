import { Core, NodeSingular } from 'cytoscape';

export type SimulationType = 'friedkin-johnsen' | 'degroot' | 'voter' | 'bounded-confidence';

export interface SimulationState {
  step: number;
  converged: boolean;
  variance: number;
}

function getNeighborOpinions(node: NodeSingular): { opinions: number[]; weights: number[] } {
  const neighbors = node.neighborhood('node');
  const opinions: number[] = [];
  const weights: number[] = [];

  neighbors.forEach((neighbor: NodeSingular) => {
    opinions.push(neighbor.data('opinion') as number);
    // For now, use uniform weights
    weights.push(1);
  });

  return { opinions, weights };
}

function calculateVariance(cy: Core): number {
  const opinions: number[] = [];
  cy.nodes().forEach((node) => {
    opinions.push(node.data('opinion') as number);
  });

  if (opinions.length === 0) return 0;

  const mean = opinions.reduce((a, b) => a + b, 0) / opinions.length;
  const variance = opinions.reduce((sum, op) => sum + (op - mean) ** 2, 0) / opinions.length;
  return variance;
}

export function stepFriedkinJohnsen(cy: Core): SimulationState {
  const newOpinions: Map<string, number> = new Map();

  cy.nodes().forEach((node) => {
    const currentOpinion = node.data('opinion') as number;
    const initialOpinion = node.data('initialOpinion') ?? currentOpinion;
    const stubbornness = node.data('stubbornness') as number ?? 0.5;

    const { opinions, weights } = getNeighborOpinions(node);

    if (opinions.length === 0) {
      newOpinions.set(node.id(), currentOpinion);
      return;
    }

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const weightedAvg = opinions.reduce((sum, op, i) => sum + op * weights[i], 0) / totalWeight;

    // Friedkin-Johnsen: x_i(t+1) = s_i * x_i(0) + (1 - s_i) * avg(neighbors)
    const newOpinion = stubbornness * initialOpinion + (1 - stubbornness) * weightedAvg;
    newOpinions.set(node.id(), Math.max(0, Math.min(1, newOpinion)));
  });

  // Apply updates
  cy.nodes().forEach((node) => {
    const newOp = newOpinions.get(node.id());
    if (newOp !== undefined) {
      node.data('opinion', newOp);
    }
  });

  const variance = calculateVariance(cy);
  return {
    step: 1,
    converged: variance < 0.0001,
    variance,
  };
}

export function stepDeGroot(cy: Core): SimulationState {
  const newOpinions: Map<string, number> = new Map();

  cy.nodes().forEach((node) => {
    const currentOpinion = node.data('opinion') as number;
    const { opinions, weights } = getNeighborOpinions(node);

    if (opinions.length === 0) {
      newOpinions.set(node.id(), currentOpinion);
      return;
    }

    // Include self in averaging
    const allOpinions = [currentOpinion, ...opinions];
    const allWeights = [1, ...weights];
    const totalWeight = allWeights.reduce((a, b) => a + b, 0);
    const weightedAvg = allOpinions.reduce((sum, op, i) => sum + op * allWeights[i], 0) / totalWeight;

    newOpinions.set(node.id(), weightedAvg);
  });

  cy.nodes().forEach((node) => {
    const newOp = newOpinions.get(node.id());
    if (newOp !== undefined) {
      node.data('opinion', newOp);
    }
  });

  const variance = calculateVariance(cy);
  return {
    step: 1,
    converged: variance < 0.0001,
    variance,
  };
}

export function stepVoter(cy: Core): SimulationState {
  const nodes = cy.nodes().toArray();

  // Pick a random node
  const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
  const neighbors = randomNode.neighborhood('node').toArray();

  if (neighbors.length > 0) {
    // Copy opinion from random neighbor
    const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
    randomNode.data('opinion', randomNeighbor.data('opinion'));
  }

  const variance = calculateVariance(cy);
  return {
    step: 1,
    converged: variance < 0.0001,
    variance,
  };
}

export function stepBoundedConfidence(cy: Core, epsilon = 0.2): SimulationState {
  const newOpinions: Map<string, number> = new Map();

  cy.nodes().forEach((node) => {
    const currentOpinion = node.data('opinion') as number;
    const { opinions } = getNeighborOpinions(node);

    // Only consider neighbors within epsilon distance
    const compatibleOpinions = opinions.filter(
      (op) => Math.abs(op - currentOpinion) <= epsilon
    );

    if (compatibleOpinions.length === 0) {
      newOpinions.set(node.id(), currentOpinion);
      return;
    }

    const allOpinions = [currentOpinion, ...compatibleOpinions];
    const avg = allOpinions.reduce((a, b) => a + b, 0) / allOpinions.length;
    newOpinions.set(node.id(), avg);
  });

  cy.nodes().forEach((node) => {
    const newOp = newOpinions.get(node.id());
    if (newOp !== undefined) {
      node.data('opinion', newOp);
    }
  });

  const variance = calculateVariance(cy);
  return {
    step: 1,
    converged: variance < 0.0001,
    variance,
  };
}

export function stepSimulation(cy: Core, type: SimulationType): SimulationState {
  switch (type) {
    case 'friedkin-johnsen':
      return stepFriedkinJohnsen(cy);
    case 'degroot':
      return stepDeGroot(cy);
    case 'voter':
      return stepVoter(cy);
    case 'bounded-confidence':
      return stepBoundedConfidence(cy);
    default:
      return stepFriedkinJohnsen(cy);
  }
}

export function initializeSimulation(cy: Core): void {
  cy.nodes().forEach((node) => {
    // Store initial opinions for Friedkin-Johnsen
    node.data('initialOpinion', node.data('opinion'));
  });
}

export const SIMULATION_OPTIONS: { value: SimulationType; label: string; description: string }[] = [
  { value: 'friedkin-johnsen', label: 'Friedkin-Johnsen', description: 'Stubborn agents with weighted averaging' },
  { value: 'degroot', label: 'DeGroot', description: 'Pure averaging (no stubbornness)' },
  { value: 'voter', label: 'Voter Model', description: 'Stochastic opinion copying' },
  { value: 'bounded-confidence', label: 'Bounded Confidence', description: 'Only influenced by similar opinions' },
];
