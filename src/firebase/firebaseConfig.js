// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlu53nJZ37HEsbG9DSJcbTcQdBtQrBPlM",
  authDomain: "devrhylme-foundation.firebaseapp.com",
  databaseURL: "https://devrhylme-foundation-default-rtdb.firebaseio.com/", // Add Realtime Database URL
  projectId: "devrhylme-foundation",
  storageBucket: "devrhylme-foundation.appspot.com", // Fixed typo in storage bucket
  messagingSenderId: "251272281211",
  appId: "1:251272281211:web:d37d49e6c5780e512976de",
  measurementId: "G-040B1TFCW8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Realtime Database
export const db = getFirestore(app); // Firestore
export const rtdb = getDatabase(app); // Realtime Database

// Initialize Firebase Analytics only on the client side
let analytics;
if (typeof window !== "undefined" && isSupported()) {
  analytics = getAnalytics(app);
}

export { analytics };
