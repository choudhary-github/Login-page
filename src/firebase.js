import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1ppxR61ghuHqzPMkF_tZNDK20XLcdLEY",
  authDomain: "login-register-app-43dc6.firebaseapp.com",
  projectId: "login-register-app-43dc6",
  storageBucket: "login-register-app-43dc6.appspot.com",
  messagingSenderId: "903875690287",
  appId: "1:903875690287:web:2df7c5307442ca719c6bda",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
