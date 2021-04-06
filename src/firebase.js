import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyAglYE03CORRmIz2FLJ2RTQIhl2YsCnho4",
    authDomain: "app-e28cc.firebaseapp.com",
    projectId: "app-e28cc",
    storageBucket: "app-e28cc.appspot.com",
    messagingSenderId: "356855702052",
    appId: "1:356855702052:web:46f0b1743e3bd31c0baeb1",
    measurementId: "G-PXSK9WH0X5"
  });

  const db =firebase.firestore();
  const auth =firebase.auth();
  const providor = new firebase.auth.GoogleAuthProvider();

  export{db,auth, providor}