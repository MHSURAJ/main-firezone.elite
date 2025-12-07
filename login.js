import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, GoogleAuthProvider, signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getDatabase, ref, get, set
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD66aIVOTVco6rTtpVinkl64UZGnZDgn1o",
  authDomain: "firezone-elite.firebaseapp.com",
  databaseURL: "https://firezone-elite-default-rtdb.firebaseio.com",
  projectId: "firezone-elite",
  storageBucket: "firezone-elite.firebasestorage.app",
  messagingSenderId: "121224317328",
  appId: "1:121224317328:web:a4d19bab51fc8076400b15",
  measurementId: "G-9YR0LYN37X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleBtn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const user = result.user;

            const adminEmail = "surushannu@gmail.com";

            if (user.email === adminEmail) {
                window.location.href = "admin.html";
            } else {
                window.location.href = "public.html";
            }
        })

        .catch((error) => {
            alert("Login Failed: " + error.message);
        });
});
