// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk9-pb7m58rRpctTuAyTZRPRPi8d72tII",
  authDomain: "kabadi-master.firebaseapp.com",
  projectId: "kabadi-master",
  storageBucket: "kabadi-master.firebasestorage.app",
  messagingSenderId: "781371873511",
  appId: "1:781371873511:web:e35019e4237a192a022a42",
  measurementId: "G-ESX6N045CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export {app,auth};