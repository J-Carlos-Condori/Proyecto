
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC4s_nM6cfcWA3Zjdt_c9nJx-RcQvs5ziA",
  authDomain: "ecommerce-app-9be93.firebaseapp.com",
  projectId: "ecommerce-app-9be93",
  storageBucket: "ecommerce-app-9be93.appspot.com",
  messagingSenderId: "175757645448",
  appId: "1:175757645448:web:fb7a714ee0ed682d34b13d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);