const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCM65s8NoLO9QDhHvfIouOzk7Dvvw3T3mY",
    authDomain: "church-auth-6257e.firebaseapp.com",
    projectId: "church-auth-6257e",
    storageBucket: "church-auth-6257e.appspot.com",
    messagingSenderId: "659722612640",
    appId: "1:659722612640:web:5056745a50fa3d1211bec5"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//sign up function 

const signUp = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        window.location.href = "signin.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
    });
}

//Sign In function 

const signIn = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.href = "home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}