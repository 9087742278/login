// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnVFb3qBogvqL318GlJQk5mWF4IT2IV5A",
    authDomain: "messcard22.firebaseapp.com",
    databaseURL: "https://messcard22-default-rtdb.firebaseio.com",
    projectId: "messcard22",
    storageBucket: "messcard22.firebasestorage.app",
    messagingSenderId: "250240284242",
    appId: "1:250240284242:web:4e3a53384d93754e17118b",
    measurementId: "G-E35WPXLKRZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Login successful! Welcome, ' + user.email);
        })
        .catch((error) => {
            document.getElementById('error-message').textContent = error.message;
        });
});

