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
export const createUserProfileDocument = async (userAuth, addtionalData) => {

    if (!userAuth) {
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                createdAt,
                displayName,
                email,
               
                ...addtionalData
            })
            console.log(createdAt);
        }
        catch (error) {
            console.log('error creating the data', error.message);
        }

    }

   return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providers = new firebase.auth.GoogleAuthProvider();

providers.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(providers);


export default firebase;