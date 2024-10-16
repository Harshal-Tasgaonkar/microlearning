// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,push,onValue,get,remove,update } from "firebase/database";
import { getAuth } from 'firebase/auth';
// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDvrvtuV7TNKylnCrN0zz7_JQbc1wtZIAs",
    authDomain: "microlearning-6ce1f.firebaseapp.com",
    projectId: "microlearning-6ce1f",
    storageBucket: "microlearning-6ce1f.appspot.com",
    messagingSenderId: "510314516679",
    appId: "1:510314516679:web:51004d76e2f4df8bb76ee2",
    databaseURL: "https://microlearning-6ce1f-default-rtdb.asia-southeast1.firebasedatabase.app"

 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
// Get a reference to the database
const database = getDatabase(app);

export { database, ref, set,push,onValue,get,remove,update,auth };
