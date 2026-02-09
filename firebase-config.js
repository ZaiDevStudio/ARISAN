import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuAkqz-1dDcBhL5iYppX25pM5sF7LX8CQ",
  authDomain: "arisan-17397.firebaseapp.com",
  projectId: "arisan-17397",
  storageBucket: "arisan-17397.firebasestorage.app",
  messagingSenderId: "12736886742",
  appId: "1:12736886742:web:b6da8d1bd74ea5ae839677"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, updateDoc, doc, query, where };
