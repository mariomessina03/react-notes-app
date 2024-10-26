import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-notes-81731.firebaseapp.com",
  projectId: "react-notes-81731",
  storageBucket: "react-notes-81731.appspot.com",
  messagingSenderId: "433492523518",
  appId: "1:433492523518:web:de42157081259bad8868af",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
