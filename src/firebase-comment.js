import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYdUht59xdbvmwsK0FWmptMsvrjKIdaTQ",
  authDomain: "personal-portfolio-avneet.firebaseapp.com",
  databaseURL: "https://personal-portfolio-avneet-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-avneet",
  storageBucket: "personal-portfolio-avneet.firebasestorage.app",
  messagingSenderId: "724710003378",
  appId: "1:724710003378:web:59208a8981d359b2066fab",
  measurementId: "G-NVWPL6RX8D"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };