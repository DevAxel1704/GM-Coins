import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const auth = window.firebaseAuth;
onAuthStateChanged(auth, user => {
  if (!user) window.location.href = "login.html";
  else document.getElementById("user-email").textContent = user.email;
});
