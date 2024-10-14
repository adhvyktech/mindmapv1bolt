import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MindMap from './pages/MindMap';
import { AuthProvider } from './contexts/AuthContext';
import { MindMapProvider } from './contexts/MindMapContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <MindMapProvider>
          <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mindmap/:id" element={<MindMap />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </MindMapProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;