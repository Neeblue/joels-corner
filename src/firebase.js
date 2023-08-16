import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore';
//import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBA-ZVbqGhU5MCDPXVGF7mimzPBaksdGXA",
  authDomain: "reactwebsite-f71fe.firebaseapp.com",
  projectId: "reactwebsite-f71fe",
  storageBucket: "reactwebsite-f71fe.appspot.com",
  messagingSenderId: "1004170437062",
  appId: "1:1004170437062:web:0182427ff94dca731352c7"
};

const app = initializeApp(firebaseConfig);