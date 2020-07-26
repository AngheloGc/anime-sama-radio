import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {

    apiKey: "AIzaSyA0LMm1z3A5qdHmgXqPypxphDextrOqmsc",
    authDomain: "anime-sama-radio-7a772.firebaseapp.com",
    databaseURL: "https://anime-sama-radio-7a772.firebaseio.com",
    projectId: "anime-sama-radio-7a772",
    storageBucket: "anime-sama-radio-7a772.appspot.com",
    messagingSenderId: "304325430709",
    appId: "1:304325430709:web:1172d0d1353039fdc65dfc",
    measurementId: "G-WYMDFPZRXH"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
