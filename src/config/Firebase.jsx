import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCM-hqoA-EH9Lq4oygcvizVb9SgA7trs7o",
  authDomain: "tronmart-9f466.firebaseapp.com",
  databaseURL:
    "https://tronmart-9f466-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tronmart-9f466",
  storageBucket: "tronmart-9f466.appspot.com",
  messagingSenderId: "1071932495186",
  appId: "1:1071932495186:web:74159ba1855c3f0f77568b",
  measurementId: "G-TXXPHZ9FH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(app);
googleProvider.setCustomParameters({ prompt: "select_account" });
// const analytics = getAnalytics(app);

export { auth, db, googleProvider };

let flag = true;
export const loader = async () => {
  if (flag) {
    const ref = collection(db, "products");
    const rawItems = await getDocs(ref);
    const filteredItems = rawItems.docs.map((doc) => {
      const data = {
        id: doc.id,
        ...doc.data(),
      };
      return data;
    });
    flag = false;
    return filteredItems;
  }
  return null;
};
