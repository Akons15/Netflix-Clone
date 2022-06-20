import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDH0mZszdcPwZUHF0Xcs4PpKwBpPvS0QE8",
    authDomain: "netflix-app-18d60.firebaseapp.com",
    projectId: "netflix-app-18d60",
    storageBucket: "netflix-app-18d60.appspot.com",
    messagingSenderId: "3933274334",
    appId: "1:3933274334:web:03e673442ea86b83e7424f"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth()