import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCAze4NGUfQA2sUu5wjymDjNZlM269IuaA",
   authDomain: "wow-randomizer.firebaseapp.com",
   projectId: "wow-randomizer",
   storageBucket: "wow-randomizer.appspot.com",
   messagingSenderId: "934391048214",
   appId: "1:934391048214:web:9e870b919e1274da332d37",
   measurementId: "G-Y9M4Y65EEV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
