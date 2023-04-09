import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDGiBIja1WlgegowVKK5ws21Y0XVHSuwk8",
  authDomain: "loginpage-188e4.firebaseapp.com",
  projectId: "loginpage-188e4",
  storageBucket: "loginpage-188e4.appspot.com",
  messagingSenderId: "171449009006",
  appId: "1:171449009006:web:56b2798b92e73d2467377f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
  signInWithPopup(auth , provider).then((result) =>{
         const name = result.user.displayName;
         const email = result.user.email;
         const profilepic = result.user.photoURL;

         localStorage.setItem("name" , name);
         localStorage.setItem("email" , email);
         localStorage.setItem("profilepic" , profilepic);
  })
}