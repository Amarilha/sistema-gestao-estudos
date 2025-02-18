import {auth, createUserWithEmailAndPassword} from "./firebaseConfig.js";



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
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "77651645333-p2gq435d1emoc6e13pgcddpbjfta2ik4.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("googleDiv"),
    { client_id:"s",
      context:"signup",
      ux_mode:"popup",
      login_uri:"s",
      auto_prompt:"false",
      type:"icon",
      shape:"circle",
      theme:"outline",
      text:"signup_with",
      size:"big",  
});
  google.accounts.id.prompt(); // also display the One Tap dialog
}

// Microsoft
