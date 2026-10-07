'use client';

interface NodeEditorProps {
  nodeId: string | null;
  opinion: number;
  stubbornness: number;
  onOpinionChange: (value: number) => void;
  onStubbornessChange: (value: number) => void;
  onClose: () => void;
}

export default function NodeEditor({
  nodeId,
  opinion,
  stubbornness,
  onOpinionChange,
  onStubbornessChange,
  onClose,
}: NodeEditorProps) {
  if (!nodeId) return null;

  return (
    <div className="absolute top-4 right-4 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Node {nodeId}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* Opinion Slider */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-600">Opinion</label>
            <span className="text-sm text-gray-500">{opinion.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={opinion}
            onChange={(e) => onOpinionChange(parseFloat(e.target.value))}
            className="w-full"
            style={{
              background: `linear-gradient(to right, rgb(0, 50, 255) 0%, rgb(255, 50, 0) 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0 (Blue)</span>
            <span>1 (Red)</span>
          </div>
        </div>

        {/* Stubbornness Slider */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-600">Stubbornness</label>
            <span className="text-sm text-gray-500">{stubbornness.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={stubbornness}
            onChange={(e) => onStubbornessChange(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Flexible</span>
            <span>Stubborn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
