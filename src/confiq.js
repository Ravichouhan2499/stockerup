// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ_e4YksdoN-4_ZXpGp9i8i5yICPnu0PU",
  authDomain: "suryatiwari-765bc.firebaseapp.com",
  projectId: "suryatiwari-765bc" ,
  storageBucket: "suryatiwari-765bc.firebasestorage.app",
  messagingSenderId:"302761613493",
  appId:  "1:302761613493:web:d190f617512e65ffc286fc",
  measurementId: "G-LCT7J0PXNM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const  database = getFirestore(app)
export const storage = getStorage(app)
export const Auth = getAuth(app)

