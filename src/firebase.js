// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs2DWBdLhVbzWnPRaypV5ewjSjO4Ao0f8",
  authDomain: "fir-5c76a.firebaseapp.com",
  projectId: "fir-5c76a",
  storageBucket: "fir-5c76a.appspot.com",
  messagingSenderId: "265711717643",
  appId: "1:265711717643:web:2f38bd4804ef137d37e60e",
  measurementId: "G-HBWK68TMTX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const databas = firebaseApp.firestore();
const auth = firebase.auth();

export { databas, auth };
