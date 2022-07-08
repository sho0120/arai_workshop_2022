import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhPVHxf_QYvib1yzHok4NCqd0CzuEyXjA",
    authDomain: "risho-61321.firebaseapp.com",
    projectId: "risho-61321",
    storageBucket: "risho-61321.appspot.com",
    messagingSenderId: "983747430437",
    appId: "1:983747430437:web:f8fb615942bddad3fbd7cc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
