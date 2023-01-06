// Import the functions you need from the SDKs you need


import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import Constants from 'expo-constants';
//import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(Constants.manifest.extra.apiKey)
const firebaseConfig = {
  apiKey: "AIzaSyD-A-5s5tRQAK4TZQJhrPS6idXhZMJLqV4",
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = getFirestore(app)
export {auth};