import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwQXRZ2rgHqUQrrr4W2Afo2aFGSns1lOo",
  authDomain: "alone-money.firebaseapp.com",
  projectId: "alone-money",
  storageBucket: "alone-money.firebasestorage.app",
  messagingSenderId: "820012382086",
  appId: "1:820012382086:web:a479fafc252760f086de07",
  measurementId: "G-48W8TLVVCD"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};