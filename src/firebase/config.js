import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxOh1_8P4xYnh-_uyqjRMkmksmfJOg9VY",
    authDomain: "projectolx-8c06a.firebaseapp.com",
    projectId: "projectolx-8c06a",
    storageBucket: "projectolx-8c06a.appspot.com",
    messagingSenderId: "884437345609",
    appId: "1:884437345609:web:b05efacbcf315b4c702698",
    measurementId: "G-LHCB0ES2N6"
  };



  export const Firebase =firebase.initializeApp(firebaseConfig)
  

  
