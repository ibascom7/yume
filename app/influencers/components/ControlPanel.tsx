'use client';

import { NetworkType, NETWORK_OPTIONS } from '../lib/generators';
import { SimulationType, SIMULATION_OPTIONS } from '../lib/simulations';

interface ControlPanelProps {
  networkType: NetworkType;
  simulationType: SimulationType;
  nodeCount: number;
  isPlaying: boolean;
  speed: number;
  step: number;
  variance: number;
  onNetworkTypeChange: (type: NetworkType) => void;
  onSimulationTypeChange: (type: SimulationType) => void;
  onNodeCountChange: (count: number) => void;
  onGenerate: () => void;
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
}

export default function ControlPanel({
  networkType,
  simulationType,
  nodeCount,
  isPlaying,
  speed,
  step,
  variance,
  onNetworkTypeChange,
  onSimulationTypeChange,
  onNodeCountChange,
  onGenerate,
  onPlay,
  onPause,
  onStep,
  onReset,
  onSpeedChange,
}: ControlPanelProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg">
      {/* Network Type Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Network Model</label>
        <select
          value={networkType}
          onChange={(e) => onNetworkTypeChange(e.target.value as NetworkType)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {NETWORK_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Simulation Type Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Simulation Model</label>
        <select
          value={simulationType}
          onChange={(e) => onSimulationTypeChange(e.target.value as SimulationType)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {SIMULATION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Node Count */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Nodes</label>
        <input
          type="number"
          min={3}
          max={100}
          value={nodeCount}
          onChange={(e) => onNodeCountChange(Math.max(3, Math.min(100, parseInt(e.target.value) || 10)))}
          className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Generate Button */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600 invisible">Action</label>
        <button
          onClick={onGenerate}
          className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
        >
          Generate
        </button>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-gray-300" />

      {/* Playback Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onReset}
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          title="Reset"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <button
          onClick={onStep}
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          title="Step"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={isPlaying ? onPause : onPlay}
          className={`p-2 rounded-md transition-colors ${
            isPlaying
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Speed Slider */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Speed</label>
        <input
          type="range"
          min={1}
          max={10}
          value={speed}
          onChange={(e) => onSpeedChange(parseInt(e.target.value))}
          className="w-24"
        />
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1 ml-auto text-right">
        <div className="text-xs text-gray-600">Step: {step}</div>
        <div className="text-xs text-gray-600">Variance: {variance.toFixed(4)}</div>
      </div>
    </div>
  );
}
