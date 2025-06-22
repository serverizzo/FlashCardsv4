import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

// Optionally import the services that you want to use
import { getAuth } from 'firebase/auth';
// import {...} from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2VFfmv_Z9llgw8xplhU_iu2p5iBuxCCo",
  authDomain: "flashcardsv4.firebaseapp.com",
  projectId: "flashcardsv4",
  storageBucket: "flashcardsv4.firebasestorage.app",
  messagingSenderId: "922021629390",
  appId: "1:922021629390:web:ff1069558c05477182af9f",
  measurementId: "G-6Y7D6FY6VP"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
