import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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

//submit button
const submitButton = document.getElementById('login-button');
submitButton.addEventListener("click", function(event){
    event.preventDefault()

    //inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "dashboard2.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    });