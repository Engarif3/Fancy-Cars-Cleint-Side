// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAie5ZiTIIfggVegWUT0WotxymflXcuWwE",
  authDomain: "fancy-cars-ba5f3.firebaseapp.com",
  projectId: "fancy-cars-ba5f3",
  storageBucket: "fancy-cars-ba5f3.appspot.com",
  messagingSenderId: "463651962299",
  appId: "1:463651962299:web:aeac847d6537dbf53e989e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;