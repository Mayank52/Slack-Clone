import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvF3npl8Ot3p7jJ5l6hJnDTgxZ-s1NurA",
  authDomain: "slack-clone-392e5.firebaseapp.com",
  projectId: "slack-clone-392e5",
  storageBucket: "slack-clone-392e5.appspot.com",
  messagingSenderId: "607079542724",
  appId: "1:607079542724:web:c2c9f1803795f05ac4be91",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};