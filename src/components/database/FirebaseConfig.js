import firebase from 'firebase/app';

import '@firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCatOnagirfdwpD1rAME_KivHcxmWEmQHU",
    authDomain: "natural-market-veronica-5541e.firebaseapp.com",
    projectId: "natural-market-veronica-5541e",
    storageBucket: "natural-market-veronica-5541e.appspot.com",
    messagingSenderId: "793175833067",
    appId: "1:793175833067:web:bc41e50408a991e9e541ae"
  };
  // Initialize Firebase
  const fb = !firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.fb();

  export const productsCollection = fb.firestore(fb).collection("db");
 