'use client';

import { useEffect, useRef, useCallback } from 'react';
import cytoscape, { Core, ElementDefinition, NodeSingular } from 'cytoscape';

interface NetworkGraphProps {
  elements: ElementDefinition[];
  onNodeSelect?: (nodeId: string, data: { opinion: number; stubbornness: number }) => void;
  onCyReady?: (cy: Core) => void;
}

function opinionToColor(opinion: number): string {
  // Blue (0) to Red (1)
  const r = Math.round(opinion * 255);
  const b = Math.round((1 - opinion) * 255);
  return `rgb(${r}, 50, ${b})`;
}

export default function NetworkGraph({ elements, onNodeSelect, onCyReady }: NetworkGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);

  const handleNodeTap = useCallback(
    (node: NodeSingular) => {
      if (onNodeSelect) {
        onNodeSelect(node.id(), {
          opinion: node.data('opinion'),
          stubbornness: node.data('stubbornness'),
        });
      }
    },
    [onNodeSelect]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': (ele) => opinionToColor(ele.data('opinion') ?? 0.5),
            label: '',
            width: 30,
            height: 30,
            'border-width': 2,
            'border-color': '#333',
          },
        },
        {
          selector: 'node:selected',
          style: {
            'border-width': 4,
            'border-color': '#ffd700',
          },
        },
        {
          selector: 'edge',
          style: {
            width: 2,
            'line-color': '#999',
            'curve-style': 'bezier',
          },
        },
      ],
      layout: {
        name: 'cose',
        animate: false,
        randomize: true,
        nodeRepulsion: () => 8000,
        idealEdgeLength: () => 80,
      },
      minZoom: 0.2,
      maxZoom: 3,
    });

    cyRef.current = cy;

    cy.on('tap', 'node', (evt) => {
      handleNodeTap(evt.target as NodeSingular);
    });

    if (onCyReady) {
      onCyReady(cy);
    }

    return () => {
      cy.destroy();
    };
  }, [elements, handleNodeTap, onCyReady]);

  // Update node colors when opinions change
  useEffect(() => {
    if (cyRef.current) {
      cyRef.current.nodes().forEach((node) => {
        node.style('background-color', opinionToColor(node.data('opinion') ?? 0.5));
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-gray-50 rounded-lg border border-gray-200"
    />
  );
}
