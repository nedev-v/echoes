import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA0M3rNmQsQ9iInOsM9IIwoHcvQivSadTk",
  authDomain: "echoes-9649a.firebaseapp.com",
  projectId: "echoes-9649a",
  storageBucket: "echoes-9649a.firebasestorage.app",
  messagingSenderId: "529124977990",
  appId: "1:529124977990:web:28b80824a092a250598947",
  measurementId: "G-Y358XD066D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);