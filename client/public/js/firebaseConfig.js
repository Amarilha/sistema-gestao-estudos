import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAeC9_22GqZt-s80gW0xcWLyguhEWvdnw4",
    authDomain: "sdge-f4d9d.firebaseapp.com",
    projectId: "sdge-f4d9d",
    storageBucket: "sdge-f4d9d.firebasestorage.app",
    messagingSenderId: "77651645333",
    appId: "1:77651645333:web:6911a17f0de1d048b99c9c",
    measurementId: "G-7BWQ9BPNZT"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth,signInWithEmailAndPassword,createUserWithEmailAndPassword };