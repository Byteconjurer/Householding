// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdzdN4eOQcnGxD566ilEocErWrhUb_Z8Q",
  authDomain: "householding-46ce8.firebaseapp.com",
  projectId: "householding-46ce8",
  storageBucket: "householding-46ce8.appspot.com",
  messagingSenderId: "401339963756",
  appId: "1:401339963756:web:cbcbb103b80be1a062bb49"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);