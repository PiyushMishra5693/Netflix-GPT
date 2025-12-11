// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg1iyjPWaGzmJ0BCgFirq7B9TeN3Eugyw",
  authDomain: "netflix-gpt-4a111.firebaseapp.com",
  projectId: "netflix-gpt-4a111",
  storageBucket: "netflix-gpt-4a111.firebasestorage.app",
  messagingSenderId: "990756025554",
  appId: "1:990756025554:web:774ab529acae68bee8e90b",
  measurementId: "G-2DSD5Q1HDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
