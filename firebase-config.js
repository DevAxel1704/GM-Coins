import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-UWszqOJ-XU98jgCpf4v0-ifuKQOZpGc",
  authDomain: "axplaystudio2-c3849.firebaseapp.com",
  projectId: "axplaystudio2-c3849",
  storageBucket: "axplaystudio2-c3849.firebasestorage.app",
  messagingSenderId: "572193599713",
  appId: "1:572193599713:web:278e5ed6d31daf44d507a0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
