// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlX52Jm7-52FOlIA7f54x5TkhoaVUijas",
  authDomain: "job-protal-8a910.firebaseapp.com",
  projectId: "job-protal-8a910",
  storageBucket: "job-protal-8a910.firebasestorage.app",
  messagingSenderId: "561865131302",
  appId: "1:561865131302:web:5b217ea1cef376e97c2de7",
  measurementId: "G-MN3CQ9F7SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

