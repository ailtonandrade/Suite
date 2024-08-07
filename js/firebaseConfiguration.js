import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU3w0zhFKuQsaJSKKGt4vwHMcFEHTqB_A",
  authDomain: "hubdb-5617b.firebaseapp.com",
  projectId: "hubdb-5617b",
  storageBucket: "hubdb-5617b.appspot.com",
  messagingSenderId: "435701475734",
  appId: "1:435701475734:web:2fb8c84cb909b02ae0d5b7"
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export {fb, db};