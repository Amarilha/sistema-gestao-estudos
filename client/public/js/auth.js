import { auth,signInWithEmailAndPassword,GoogleAuthProvider,provider,signInWithPopup,providerMicrosoft,OAuthProvider } from "./firebaseConfig.js";

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

// Google
const googleButton = document.getElementById('googleLogin');
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
const MicrosoftButton = document.getElementById('microsoftLogin');
MicrosoftButton.addEventListener("click", function(event) {
  signInWithPopup(auth, providerMicrosoft)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = OAuthProvider.credentialFromResult(result);
    const user = result.user;
    window.location.href = "dashboard2.html";

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

});