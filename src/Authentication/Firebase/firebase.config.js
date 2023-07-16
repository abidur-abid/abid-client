// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// here all the firebaseConfig will be change project by project
const firebaseConfig = {
  apiKey: "AIzaSyCuOoozJWTmyiJSyccPvz_8f4PwOhPvYzY",
  authDomain: "portfolio-website-53465.firebaseapp.com",
  projectId: "portfolio-website-53465",
  storageBucket: "portfolio-website-53465.appspot.com",
  messagingSenderId: "120051721712",
  appId: "1:120051721712:web:25add069be1c9440ac2935"
};

// Initialize Firebase
// app must be export
export const app = initializeApp(firebaseConfig);