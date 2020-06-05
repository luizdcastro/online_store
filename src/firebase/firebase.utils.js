import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAddXmIF1o-kcOMZA4JHFAQp7OmrCqQFBk",
  authDomain: "online-store-58d24.firebaseapp.com",
  databaseURL: "https://online-store-58d24.firebaseio.com",
  projectId: "online-store-58d24",
  storageBucket: "online-store-58d24.appspot.com",
  messagingSenderId: "209270461929",
  appId: "1:209270461929:web:592c9e37ed506b652fe778",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.messase);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
