'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Core, ElementDefinition } from 'cytoscape';
import { NetworkType, generateNetwork } from './lib/generators';
import { SimulationType, stepSimulation, initializeSimulation } from './lib/simulations';
import ControlPanel from './components/ControlPanel';
import NodeEditor from './components/NodeEditor';

// Dynamic import to avoid SSR issues with Cytoscape
const NetworkGraph = dynamic(() => import('./components/NetworkGraph'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
      Loading graph...
    </div>
  ),
});

export default function Influencers() {
  // Network configuration
  const [networkType, setNetworkType] = useState<NetworkType>('erdos-renyi');
  const [simulationType, setSimulationType] = useState<SimulationType>('friedkin-johnsen');
  const [nodeCount, setNodeCount] = useState(20);
  const [elements, setElements] = useState<ElementDefinition[]>([]);

  // Simulation state
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [step, setStep] = useState(0);
  const [variance, setVariance] = useState(0);

  // Node editor state
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [selectedOpinion, setSelectedOpinion] = useState(0.5);
  const [selectedStubbornness, setSelectedStubbornness] = useState(0.5);

  // Cytoscape reference
  const cyRef = useRef<Core | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate initial network
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = useCallback(() => {
    const newElements = generateNetwork(networkType, {
      nodeCount,
      edgeProbability: 0.3,
      initialConnections: 2,
      neighborCount: 4,
      rewiringProbability: 0.3,
    });
    setElements(newElements);
    setStep(0);
    setVariance(0);
    setIsPlaying(false);
    setSelectedNode(null);
  }, [networkType, nodeCount]);

  const handleCyReady = useCallback((cy: Core) => {
    cyRef.current = cy;
    initializeSimulation(cy);
  }, []);

  const handleNodeSelect = useCallback((nodeId: string, data: { opinion: number; stubbornness: number }) => {
    setSelectedNode(nodeId);
    setSelectedOpinion(data.opinion);
    setSelectedStubbornness(data.stubbornness);
  }, []);

  const handleOpinionChange = useCallback((value: number) => {
    setSelectedOpinion(value);
    if (cyRef.current && selectedNode) {
      const node = cyRef.current.getElementById(selectedNode);
      node.data('opinion', value);
      node.data('initialOpinion', value);
      // Force re-render
      node.style('background-color', `rgb(${Math.round(value * 255)}, 50, ${Math.round((1 - value) * 255)})`);
    }
  }, [selectedNode]);

  const handleStubbornessChange = useCallback((value: number) => {
    setSelectedStubbornness(value);
    if (cyRef.current && selectedNode) {
      const node = cyRef.current.getElementById(selectedNode);
      node.data('stubbornness', value);
    }
  }, [selectedNode]);

  const runStep = useCallback(() => {
    if (!cyRef.current) return;

    const result = stepSimulation(cyRef.current, simulationType);
    setStep((prev) => prev + result.step);
    setVariance(result.variance);

    // Update node colors
    cyRef.current.nodes().forEach((node) => {
      const opinion = node.data('opinion') as number;
      node.style('background-color', `rgb(${Math.round(opinion * 255)}, 50, ${Math.round((1 - opinion) * 255)})`);
    });

    // Update selected node display if one is selected
    if (selectedNode && cyRef.current) {
      const node = cyRef.current.getElementById(selectedNode);
      if (node.length > 0) {
        setSelectedOpinion(node.data('opinion'));
      }
    }

    if (result.converged) {
      setIsPlaying(false);
    }
  }, [simulationType, selectedNode]);

  const handlePlay = useCallback(() => {
    if (!cyRef.current) return;
    initializeSimulation(cyRef.current);
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleReset = useCallback(() => {
    if (!cyRef.current) return;
    setIsPlaying(false);
    setStep(0);

    // Reset all opinions to initial values
    cyRef.current.nodes().forEach((node) => {
      const initial = node.data('initialOpinion') ?? Math.random();
      node.data('opinion', initial);
      node.style('background-color', `rgb(${Math.round(initial * 255)}, 50, ${Math.round((1 - initial) * 255)})`);
    });

    setVariance(0);
  }, []);

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      const interval = 1000 / speed;
      intervalRef.current = setInterval(runStep, interval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, speed, runStep]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <span className="text-lg sm:text-xl font-bold">Influencers</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-6 flex flex-col gap-4">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Network Opinion Dynamics</h1>
            <p className="text-gray-600">
              Generate networks and simulate opinion dynamics. Click on nodes to edit their properties.
            </p>
          </div>

          {/* Control Panel */}
          <ControlPanel
            networkType={networkType}
            simulationType={simulationType}
            nodeCount={nodeCount}
            isPlaying={isPlaying}
            speed={speed}
            step={step}
            variance={variance}
            onNetworkTypeChange={setNetworkType}
            onSimulationTypeChange={setSimulationType}
            onNodeCountChange={setNodeCount}
            onGenerate={handleGenerate}
            onPlay={handlePlay}
            onPause={handlePause}
            onStep={runStep}
            onReset={handleReset}
            onSpeedChange={setSpeed}
          />

          {/* Graph Container */}
          <div className="relative h-[500px] sm:h-[600px]">
            <NetworkGraph
              elements={elements}
              onNodeSelect={handleNodeSelect}
              onCyReady={handleCyReady}
            />
            <NodeEditor
              nodeId={selectedNode}
              opinion={selectedOpinion}
              stubbornness={selectedStubbornness}
              onOpinionChange={handleOpinionChange}
              onStubbornessChange={handleStubbornessChange}
              onClose={() => setSelectedNode(null)}
            />
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Opinion:</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgb(0, 50, 255)' }} />
              <span>0</span>
            </div>
            <div
              className="w-24 h-4 rounded"
              style={{ background: 'linear-gradient(to right, rgb(0, 50, 255), rgb(255, 50, 0))' }}
            />
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgb(255, 50, 0)' }} />
              <span>1</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
