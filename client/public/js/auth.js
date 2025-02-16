import { auth,signInWithEmailAndPassword } from "./firebaseConfig.js";

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