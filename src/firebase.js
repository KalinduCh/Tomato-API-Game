import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAJ61BVineBhSJgt-FoCEwT0b4irdgGzBA",
    authDomain: "puzzle-auth-c3e1f.firebaseapp.com",
    projectId: "puzzle-auth-c3e1f",
    storageBucket: "puzzle-auth-c3e1f.appspot.com",
    messagingSenderId: "626767968636",
    appId: "1:626767968636:web:73abf15f3f2641f8514cf9"
  };

firebase.initializeApp(firebaseConfig);

// Export authentication and firestore instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();
