import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRLxZ3NZ0JPhTabRZyAt2Hbp9HVoN-ow8",
  authDomain: "todoly-30c97.firebaseapp.com",
  projectId: "todoly-30c97",
  storageBucket: "todoly-30c97.appspot.com",
  messagingSenderId: "515705816958",
  appId: "1:515705816958:web:4f1cd3c158352a6908152f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export default {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
};
