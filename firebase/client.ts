import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDAzCALLmO7mnDCDCZ5QrLB0KZxyS_ZZU",
  authDomain: "prepwise-f06cf.firebaseapp.com",
  projectId: "prepwise-f06cf",
  storageBucket: "prepwise-f06cf.firebasestorage.app",
  messagingSenderId: "787814240025",
  appId: "1:787814240025:web:581918e76b393a0cb1ff88",
  measurementId: "G-T6TT5H6GJD"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);