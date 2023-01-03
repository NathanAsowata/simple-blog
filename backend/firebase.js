import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "simple-blog-3934c.firebaseapp.com",
  projectId: "simple-blog-3934c",
  storageBucket: "simple-blog-3934c.appspot.com",
  messagingSenderId: "837912591446",
  appId: "1:837912591446:web:f2edb8844d03e1d3ad8ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = getFirestore(app)

export default db;
