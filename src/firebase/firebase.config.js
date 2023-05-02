// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt_YlIgYAFLcdgGKOu59a8mqTJ6CJ5SM8",
  authDomain: "chef-recipie.firebaseapp.com",
  projectId: "chef-recipie",
  storageBucket: "chef-recipie.appspot.com",
  messagingSenderId: "327712144359",
  appId: "1:327712144359:web:e8209c611b3ea8f0f61b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;