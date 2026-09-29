// Shared Firebase setup for all MRTools pages.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase console → Project settings → Your apps
const firebaseConfig = {
  apiKey: "AIzaSyBqEy0AZfn5jduktlfu1CxsTtQ7Jqr_zGM",
  authDomain: "mrtools-50586.firebaseapp.com",
  projectId: "mrtools-50586",
  appId: "1:960620008673:web:0c4f8bb48645b8324e53a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
