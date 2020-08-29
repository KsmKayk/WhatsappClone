import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2ROqQfCswxRAtuT0Wgo7KjQmCeDEuZA",
  authDomain: "whatsappclone-f6b0f.firebaseapp.com",
  databaseURL: "https://whatsappclone-f6b0f.firebaseio.com",
  projectId: "whatsappclone-f6b0f",
  storageBucket: "whatsappclone-f6b0f.appspot.com",
  messagingSenderId: "68685911275",
  appId: "1:68685911275:web:094da1ac89485882781aae",
  measurementId: "G-F394BKSSYW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
