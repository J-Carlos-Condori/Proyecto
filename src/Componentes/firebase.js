import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL0cIpwaVAcJGGOHxTrh-GOHoovVziEec",
  authDomain: "ecommerce-react-4e0e7.firebaseapp.com",
  projectId: "ecommerce-react-4e0e7",
  storageBucket: "ecommerce-react-4e0e7.appspot.com",
  messagingSenderId: "254383936550",
  appId: "1:254383936550:web:3e7f073f3f12c1a33882e7"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)