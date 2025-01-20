import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app-compat.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth-compat.js";

const firebaseConfig = {
    apiKey: "AIzaSyAeC9_22GqZt-s80gW0xcWLyguhEWvdnw4",
    authDomain: "sdge-f4d9d.firebaseapp.com",
    projectId: "sdge-f4d9d",
    storageBucket: "sdge-f4d9d.firebasestorage.app",
    messagingSenderId: "77651645333",
    appId: "1:77651645333:web:6911a17f0de1d048b99c9c",
    measurementId: "G-7BWQ9BPNZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log('antes');
signInWithEmailAndPassword(auth, "igoramarilha23@gmail.com", "amarilha23")
    .then(response => {
        console.log('Login realizado com sucesso:', response.user);
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error.message);
    });
console.log('depois');
