import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBS9Bruo4Dw1iQJutthhw-49-5mVQTme7E",
  authDomain: "snapchat-clone-yt-25232.firebaseapp.com",
  projectId: "snapchat-clone-yt-25232",
  storageBucket: "snapchat-clone-yt-25232.appspot.com",
  messagingSenderId: "900212656738",
  appId: "1:900212656738:web:725cf0f0fbec54583b5f3b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
