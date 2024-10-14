import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { v4 as uuidv4 } from 'uuid';

interface MindMap {
  id: string;
  title: string;
  nodes: any[];
  edges: any[];
}

interface MindMapContextType {
  mindMaps: MindMap[];
  createMindMap: () => MindMap;
  getMindMap: (id: string) => MindMap | undefined;
  updateMindMap: (id: string, data: Partial<MindMap>) => Promise<void>;
  deleteMindMap: (id: string) => Promise<void>;
}

const MindMapContext = createContext<MindMapContextType | undefined>(undefined);

export const MindMapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mindMaps, setMindMaps] = useState<MindMap[]>([]);
  const { user } = useAuth();
  const db = getFirestore();

  useEffect(() => {
    if (user) {
      const fetchMindMaps = async () => {
        const mindMapsCollection = collection(db, `users/${user.uid}/mindmaps`);
        const snapshot = await getDocs(mindMapsCollection);
        const fetchedMindMaps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MindMap));
        setMindMaps(fetchedMindMaps);
      };

      fetchMindMaps();
    } else {
      setMindMaps([]);
    }
  }, [user, db]);

  const createMindMap = () => {
    const newMindMap: MindMap = {
      id: uuidv4(),
      title: 'Untitled Mind Map',
      nodes: [],
      edges: [],
    };

    if (user) {
      setDoc(doc(db, `users/${user.uid}/mindmaps/${newMindMap.id}`), newMindMap);
    }

    setMindMaps([...mindMaps, newMindMap]);
    return newMindMap;
  };

  const getMindMap = (id: string) => {
    return mindMaps.find(mm => mm.id === id);
  };

  const updateMindMap = async (id: string, data: Partial<MindMap>) => {
    if (user) {
      await updateDoc(doc(db, `users/${user.uid}/mindmaps/${id}`), data);
    }

    setMindMaps(mindMaps.map(mm => mm.id === id ? { ...mm, ...data } : mm));
  };

  const deleteMindMap = async (id: string) => {
    if (user) {
      await deleteDoc(doc(db, `users/${user.uid}/mindmaps/${id}`));
    }

    setMindMaps(mindMaps.filter(mm => mm.id !== id));
  };

  return (
    <MindMapContext.Provider value={{ mindMaps, createMindMap, getMindMap, updateMindMap, deleteMindMap }}>
      {children}
    </MindMapContext.Provider>
  );
};

export const useMindMap = () => {
  const context = useContext(MindMapContext);
  if (context === undefined) {
    throw new Error('useMindMap must be used within a MindMapProvider');
  }
  return context;
};