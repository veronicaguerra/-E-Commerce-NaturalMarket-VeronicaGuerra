import firebase from 'firebase/app';

import '@firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAKfdIsEuZbpIRi9fovcEStXaZ0qSS7mhE",
    authDomain: "natural-market-veronica-guerra.firebaseapp.com",
    projectId: "natural-market-veronica-guerra",
    storageBucket: "natural-market-veronica-guerra.appspot.com",
    messagingSenderId: "1042433615926",
    appId: "1:1042433615926:web:0a5e8528b858f4d02e5097"
  };
  // Initialize Firebase
  const fb = !firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.fb();

  export const productsCollection = fb.firestore(fb).collection("product-naturalmarket");
 