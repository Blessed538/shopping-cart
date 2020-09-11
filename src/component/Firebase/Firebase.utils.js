import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC2vUj5hutgZEkkCZl5b_LB-6pnIUczqag',
  authDomain: 'e-clothing-db-bedbb.firebaseapp.com',
  databaseURL: 'https://e-clothing-db-bedbb.firebaseio.com',
  projectId: 'e-clothing-db-bedbb',
  storageBucket: 'e-clothing-db-bedbb.appspot.com',
  messagingSenderId: '476254041753',
  appId: '1:476254041753:web:549634f6342fc813b82a08',
  measurementId: 'G-RRQDX45MC9',
};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
if (!userAuth) return;

 const userRef  = firestore.doc(`users/${userAuth.uid}`); 


 const snapShot = await userRef.get();

 if(!snapShot.exists){
   const {displayName, email} = userAuth;
   const createdAt = new Date();

   try {
     await userRef.set({displayName,
    email,
  createdAt,
...additionalData})
   
 } catch (error) {
 }
 }
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
