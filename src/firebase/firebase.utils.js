import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyAt6HoK_axwtjqn-fU6zmVC1-cheK2Q4gk",
    authDomain: "crown-db-997ff.firebaseapp.com",
    databaseURL: "https://crown-db-997ff.firebaseio.com",
    projectId: "crown-db-997ff",
    storageBucket: "",
    messagingSenderId: "1021338163151",
    appId: "1:1021338163151:web:a5cb37c784c1ef7d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;


