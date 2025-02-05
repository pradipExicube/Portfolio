import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,

  apiKey: "AIzaSyDMuAjGM2pO4kUK_lwYqwAZ650agAJ5CRs",
  authDomain: "portfolio-pradip.firebaseapp.com",
  projectId: "portfolio-pradip",
  storageBucket: "portfolio-pradip.firebasestorage.app",
  messagingSenderId: "278601556078",
  appId: "1:278601556078:web:8fd0e551e35578a023467f",
  measurementId: "G-2RNR7VP54Q"
};

// // Initialize Firebase (to prevent multiple initializations in Next.js)
// const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db: Firestore = getFirestore(app);
// const auth: Auth = getAuth(app);

// export { db, auth };

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db: Firestore = getFirestore(app);

export { db };
