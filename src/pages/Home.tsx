import React from 'react';
import { Link } from 'react-router-dom';
import { useMindMap } from '../contexts/MindMapContext';
import { PlusCircle, List } from 'lucide-react';

const Home: React.FC = () => {
  const { mindMaps, createMindMap } = useMindMap();

  const handleCreateMindMap = () => {
    const newMindMap = createMindMap();
    // Redirect to the new mind map
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Welcome to MindMap PWA</h1>
      <div className="flex justify-center">
        <button
          onClick={handleCreateMindMap}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={24} />
          <span>Create New Mind Map</span>
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <List className="mr-2" />
          Your Mind Maps
        </h2>
        {mindMaps.length > 0 ? (
          <ul className="space-y-4">
            {mindMaps.map((mindMap) => (
              <li key={mindMap.id} className="border-b pb-2">
                <Link
                  to={`/mindmap/${mindMap.id}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {mindMap.title || 'Untitled Mind Map'}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You haven't created any mind maps yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;