import firebase from 'firebase/app';

import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD3EKeYDKwz3HAIhpcVvbUdB_ja8Udnty8",
  authDomain: "natural-market-veronica-a9562.firebaseapp.com",
  projectId: "natural-market-veronica-a9562",
  storageBucket: "natural-market-veronica-a9562.appspot.com",
  messagingSenderId: "164812468197",
  appId: "1:164812468197:web:589eaedf11b5d54912490c"
};

  // Initialize Firebase
  const fb = !firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.fb();

  export const productsCollection = fb.firestore(fb).collection("db");
 
  export const ordersCollection = fb.firestore(fb).collection("db_orders");