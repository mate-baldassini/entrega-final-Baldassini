import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIyqNPIq0UVlpJntg-BJoTiOtdnxsPshI",
  authDomain: "app-reactjs-5c554.firebaseapp.com",
  projectId: "app-reactjs-5c554",
  storageBucket: "app-reactjs-5c554.firebasestorage.app",
  messagingSenderId: "290334555695",
  appId: "1:290334555695:web:4b705d20c80849fb5f10da",
  measurementId: "G-DKDTP962QJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
