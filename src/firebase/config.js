
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCt3AV2xbExIK4YJbV7e2MB-PClweVAwPk",
  authDomain: "crud-67aff.firebaseapp.com",
  projectId: "crud-67aff",
  storageBucket: "crud-67aff.appspot.com",
  messagingSenderId: "935472732681",
  appId: "1:935472732681:web:1fcfd37e8b1c1aac64f6d8",
  measurementId: "G-FV0V8FK1XC"
};


const app = initializeApp(firebaseConfig);
export default getFirestore()