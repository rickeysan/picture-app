import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCL92J38ym4hK6LYrtq9Q0eejAmJ_CtrUE",
    authDomain: "crud-practice2.firebaseapp.com",
    projectId: "crud-practice2",
    storageBucket: "crud-practice2.appspot.com",
    messagingSenderId: "635993547872",
    appId: "1:635993547872:web:fef884a22e42b6d1318f05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)