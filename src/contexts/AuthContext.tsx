import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut, User } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtrCRuPK2fK3zCjTcpi3yAEECgV3EGjrk",
  authDomain: "mindmapv1bolt.firebaseapp.com",
  projectId: "mindmapv1bolt",
  storageBucket: "mindmapv1bolt.appspot.com",
  messagingSenderId: "350506508029",
  appId: "1:350506508029:web:c22a786df8f81f498de894",
  measurementId: "G-6TXE836LGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
// ... rest of the file remains the same