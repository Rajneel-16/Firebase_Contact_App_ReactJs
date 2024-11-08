// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9bUnhMqzchdEjDnw-TT104a_U2aHAEMo",
  authDomain: "vite-contact-d5d3d.firebaseapp.com",
  projectId: "vite-contact-d5d3d",
  storageBucket: "vite-contact-d5d3d.firebasestorage.app",
  messagingSenderId: "985731441743",
  appId: "1:985731441743:web:ba297293c18a6fb35eb63a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);