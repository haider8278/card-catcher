// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHTvCRcPPwxch4801OZR7ADKihDJUQANQ",
    authDomain: "credit-card-catcher.firebaseapp.com",
    projectId: "credit-card-catcher",
    storageBucket: "credit-card-catcher.appspot.com",
    messagingSenderId: "657350831125",
    appId: "1:657350831125:web:d4a8bbcbc9edbab8d6321c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();