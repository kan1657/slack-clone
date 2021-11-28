import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnkdZmKVPR07h0FaWk5mIsfcoj6XYHuUU",
  authDomain: "slack-clone-1ae69.firebaseapp.com",
  projectId: "slack-clone-1ae69",
  storageBucket: "slack-clone-1ae69.appspot.com",
  messagingSenderId: "412229021288",
  appId: "1:412229021288:web:a0d198dcfd1a4c8dec95dd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
