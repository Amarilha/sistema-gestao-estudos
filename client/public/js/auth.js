const firebaseConfig = {
    apiKey: "AIzaSyAeC9_22GqZt-s80gW0xcWLyguhEWvdnw4",
    authDomain: "sdge-f4d9d.firebaseapp.com",
    projectId: "sdge-f4d9d",
    storageBucket: "sdge-f4d9d.firebasestorage.app",
    messagingSenderId: "77651645333",
    appId: "1:77651645333:web:6911a17f0de1d048b99c9c",
    measurementId: "G-7BWQ9BPNZT"
};
// Inicializar o Firebase App
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// login do usuario
function login() {

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    
    console.log(email, password);
    // alert(email);
    // alert(password);

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            // alert("logado com sucesso");
            // const user = userCredential.user;
            // document.getElementById("user-email").textContent = user.email;
            // toggleAuthState(true);
            window.location.href = "dashboard2.html";
        })
        .catch((error) => {
            alert("erro ao logar");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

// cadastro do usuario
function cadastrar() {

}