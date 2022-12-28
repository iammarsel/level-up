// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-A-5s5tRQAK4TZQJhrPS6idXhZMJLqV4",
  authDomain: "levelup-394ca.firebaseapp.com",
  projectId: "levelup-394ca",
  storageBucket: "levelup-394ca.appspot.com",
  messagingSenderId: "992696262049",
  appId: "1:992696262049:web:185f34b13d73ddeb64bfe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};