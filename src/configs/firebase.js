import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV3ehB2MY63KxM59xrSYoJpGkYXlzeyhM",

  authDomain: "farzicafee.firebaseapp.com",

  projectId: "farzicafee",

  storageBucket: "farzicafee.firebasestorage.app",

  messagingSenderId: "555533115711",

  appId: "1:555533115711:web:881e82064716993806738a",

  measurementId: "G-MK8D8WP3G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
