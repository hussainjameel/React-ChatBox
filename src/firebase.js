import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeQsWQmOhR8Ntry_gfJ3XTkuMCW6FQzkw",
  authDomain: "react-chatbox-1b296.firebaseapp.com",
  projectId: "react-chatbox-1b296",
  storageBucket: "react-chatbox-1b296.appspot.com",
  messagingSenderId: "990769363364",
  appId: "1:990769363364:web:fc268ba76c480113fce931",
  measurementId: "G-7MCLXKCRW6",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
