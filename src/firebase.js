import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCKYGdji1afyom8JBSalptkTEV-fNxVnKw",
	authDomain: "challenge-8fb41.firebaseapp.com",
	projectId: "challenge-8fb41",
	storageBucket: "challenge-8fb41.appspot.com",
	messagingSenderId: "911576043545",
	appId: "1:911576043545:web:edadb5642c5742eb1cda88",
	measurementId: "G-RP905WRVV7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
