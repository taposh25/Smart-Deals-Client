// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqtJFif6QJF7ZhadRJQFE6sZNK4oTP3tE",
  authDomain: "smart-deals-c195c.firebaseapp.com",
  projectId: "smart-deals-c195c",
  storageBucket: "smart-deals-c195c.firebasestorage.app",
  messagingSenderId: "505691083305",
  appId: "1:505691083305:web:3f5e21233316c1b2ba8238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);