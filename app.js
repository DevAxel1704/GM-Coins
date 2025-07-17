import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const auth = window.firebaseAuth;
const db = window.firebaseDB;

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    location.href = "index.html";
  } catch (err) {
    alert("Error al iniciar sesión");
  }
};

window.register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "usuarios", cred.user.uid), {
      email,
      saldo: 0,
      referidos: 0,
      nivel: "Bronce",
      timestamp: Date.now()
    });
    location.href = "index.html";
  } catch (err) {
    alert("Error al registrarse");
  }
};

window.logout = async () => {
  await signOut(auth);
  location.href = "login.html";
};

window.retirar = () => alert("Pronto podrás retirar tus coins 😉");
