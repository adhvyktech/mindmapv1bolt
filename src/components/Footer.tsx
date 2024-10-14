import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 MindMap PWA. All rights reserved.</p>
        <a
          href="https://tapit.club"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-100 transition-colors"
        >
          Powered by Tapit.Club
        </a>
      </div>
    </footer>
  );
};

export default Footer;