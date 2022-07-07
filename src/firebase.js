import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDaQvfAm1Emc0zu73HgeR-Uj0UjdBYZjbw",
	authDomain: "arai-workshop-2022.firebaseapp.com",
	projectId: "arai-workshop-2022",
	storageBucket: "arai-workshop-2022.appspot.com",
	messagingSenderId: "159582546812",
	appId: "1:159582546812:web:162ffa2dda8bed5a1092f9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
