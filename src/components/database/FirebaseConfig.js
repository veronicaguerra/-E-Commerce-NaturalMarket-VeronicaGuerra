import firebase from 'firebase/app';

import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCaQv-_qY-Sfpk_0gSMBzUeWpKwYzJQ-qk",
  authDomain: "naturalmarket-a.firebaseapp.com",
  projectId: "naturalmarket-a",
  storageBucket: "naturalmarket-a.appspot.com",
  messagingSenderId: "267100822658",
  appId: "1:267100822658:web:2f5d3f540f51d7f618289b"
};
  // Initialize Firebase
  const fb = !firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.fb();

  export const productsCollection = fb.firestore(fb).collection("db");
 
  export const ordersCollection = fb.firestore(fb).collection("db_orders");