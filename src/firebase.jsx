// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Make sure this is imported

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS81EXMPzcPa0131BwjsjiYLEuA8ghTAA",
  authDomain: "quickride-13d5b.firebaseapp.com",
  projectId: "quickride-13d5b",
  storageBucket: "quickride-13d5b.appspot.com", // ✅ Corrected from 'firebasestorage.app'
  messagingSenderId: "1064271079251",
  appId: "1:1064271079251:web:8184e01e8e727fd6dbe3a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize and export the auth object
const auth = getAuth(app);
export { auth };