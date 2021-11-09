// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-NHTLZE3_725Yl4SJMHUc1r_bFKZbrwM",
  authDomain: "instagram-v2-4f4a8.firebaseapp.com",
  projectId: "instagram-v2-4f4a8",
  storageBucket: "instagram-v2-4f4a8.appspot.com",
  messagingSenderId: "1065893401072",
  appId: "1:1065893401072:web:965e7ccc6b8058356c4d35",
  measurementId: "G-FZY5QWW7P7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }