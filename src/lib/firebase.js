// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPl9KaB-3idKv18_3F7X_d364Euht3jqc",
  authDomain: "pantry-mgmt.firebaseapp.com",
  projectId: "pantry-mgmt",
  storageBucket: "pantry-mgmt.appspot.com",
  messagingSenderId: "129678461779",
  appId: "1:129678461779:web:8743fcf013b22b98726fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };