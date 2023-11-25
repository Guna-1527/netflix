import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0ddcNtV2HhNQpvuVZ3Kz6jgn800fLQDQ",
  authDomain: "netflix-clone-58124.firebaseapp.com",
  projectId: "netflix-clone-58124",
  storageBucket: "netflix-clone-58124.appspot.com",
  messagingSenderId: "911057826974",
  appId: "1:911057826974:web:c2851a204afc561840f78f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };