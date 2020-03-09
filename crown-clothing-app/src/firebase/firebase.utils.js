import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXkxGDxxiq5mBUF1mTGSa0HDNEr6nSlHI",
    authDomain: "crown-db-16dcd.firebaseapp.com",
    databaseURL: "https://crown-db-16dcd.firebaseio.com",
    projectId: "crown-db-16dcd",
    storageBucket: "crown-db-16dcd.appspot.com",
    messagingSenderId: "19069471880",
    appId: "1:19069471880:web:985122edd3fd224a2c633d",
    measurementId: "G-0LMDW7FSKR"
}

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore=firebase.firestore();

const providers = new firebase.auth.GoogleAuthProvider();

providers.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(providers);

export default firebase;