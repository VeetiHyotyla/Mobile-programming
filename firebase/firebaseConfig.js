import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqU6oHKo8twzLG83-mYUkwz_Sm11Wv5js",
  authDomain: "location-5aadb.firebaseapp.com",
  projectId: "location-5aadb",
  storageBucket: "location-5aadb.firebasestorage.app",
  messagingSenderId: "718692407117",
  appId: "1:718692407117:web:86ee8328a43211ebb64904",
  measurementId: "G-DSJ8Q012XX"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth };
