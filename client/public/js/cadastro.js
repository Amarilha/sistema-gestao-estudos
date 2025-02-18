import {auth, createUserWithEmailAndPassword,GoogleAuthProvider,provider,signInWithPopup } from "./firebaseConfig.js";



const cadastroButoon = document.getElementById('cadastrar');
cadastroButoon.addEventListener("click", function(event) {
    event.preventDefault()

    const cadastroEmail = document.getElementById('cadastroemail').value;
    const cadastroPwd = document.getElementById('cadastropwd').value;
    const confirmarPwd = document.getElementById('confirmarpwd').value;

    const pwd = cadastroPwd === confirmarPwd;
    if (pwd){
      createUserWithEmailAndPassword(auth, cadastroEmail, cadastroPwd)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        const userId = user.uid;
        // Exibe a mensagem de sucesso
      document.getElementById('mensagem').textContent = 'Usuário cadastrado com sucesso!';
      // cor da mensagem
      document.getElementById('mensagem').style.color = '#28a745';

      // Limpa os campos de email e senha
      document.getElementById('cadastroemail').value = '';
      document.getElementById('cadastropwd').value = '';
      document.getElementById('confirmarpwd').value = '';

      // Opcional: Focar no campo de email após o cadastro
      document.getElementById('cadastroemail').focus();
      // redirecionar para o dashboard
      window.location.href = "dashboard2.html";
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }else{
      
    // Exibe a mensagem de sucesso
    document.getElementById('mensagem').textContent = 'As senhas de acesso são distintas.';
    // cor da mensagem
    document.getElementById('mensagem').style.color = 'red';
    }
});

// Google
const googleButton = document.getElementById('googleDiv');
googleButton.addEventListener("click", function(event) {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    window.location.href = "dashboard2.html";

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

});

// Microsoft
