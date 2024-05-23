// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgRTxcBcyIG9dp30644DvA-WOM2RVTl0Q",
    authDomain: "jsm-react-native-demo.firebaseapp.com",
    projectId: "jsm-react-native-demo",
    storageBucket: "jsm-react-native-demo.appspot.com",
    messagingSenderId: "225238913310",
    appId: "1:225238913310:web:0b787c184835340b4ab90f",
    measurementId: "G-P3H8G94YZ0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)

// const analytics = getAnalytics(FIREBASE_APP);