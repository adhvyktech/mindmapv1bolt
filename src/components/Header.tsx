import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  const { user, signIn, signOut } = useAuth();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Brain size={32} />
          <span className="text-xl font-bold">MindMap PWA</span>
        </Link>
        <nav>
          {user ? (
            <button
              onClick={signOut}
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={signIn}
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Sign In with Google
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;