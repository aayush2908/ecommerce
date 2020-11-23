import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUbDejcCtI2_4O4rYz3Qdt6M7s-NRjxmA",
  authDomain: "ecommerce-7c3ea.firebaseapp.com",
  databaseURL: "https://ecommerce-7c3ea.firebaseio.com",
  projectId: "ecommerce-7c3ea",
  storageBucket: "ecommerce-7c3ea.appspot.com",
  messagingSenderId: "628801657097",
  appId: "1:628801657097:web:0d7c08a824eb2b47f01bd8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
