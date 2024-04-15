import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDa7wN-br8VOPQ2Qiiflhsvn_t6m0NFKkA",
  authDomain: "miniblog-d196d.firebaseapp.com",
  projectId: "miniblog-d196d",
  storageBucket: "miniblog-d196d.appspot.com",
  messagingSenderId: "1019437103698",
  appId: "1:1019437103698:web:d55cd7cc516ad908af7d8b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };