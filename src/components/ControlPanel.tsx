import React from 'react';
import { Save, Download } from 'lucide-react';

interface ControlPanelProps {
  onSave: () => void;
  onExport: (format: 'json' | 'mm') => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onSave, onExport }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 flex justify-between items-center">
      <button
        onClick={onSave}
        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Save size={20} />
        <span>Save</span>
      </button>
      <div className="space-x-2">
        <button
          onClick={() => onExport('json')}
          className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          <Download size={20} />
          <span>Export JSON</span>
        </button>
        <button
          onClick={() => onExport('mm')}
          className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          <Download size={20} />
          <span>Export MM</span>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;