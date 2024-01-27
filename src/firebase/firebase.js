import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyCu-9juVVr6tezq1JD3yXxYdFDLqLjag",
    authDomain: "insta-clone-fc917.firebaseapp.com",
    projectId: "insta-clone-fc917",
    storageBucket: "insta-clone-fc917.appspot.com",
    messagingSenderId: "894578760664",
    appId: "1:894578760664:web:0017736e1316f8b341b0ad",
    measurementId: "G-039QVEPECW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };