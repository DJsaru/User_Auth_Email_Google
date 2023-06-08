import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcOJ93cZSRYztVIsH4fttVVDNp70aQWEA",
  authDomain: "finaleproject-be50b.firebaseapp.com",
  projectId: "finaleproject-be50b",
  storageBucket: "finaleproject-be50b.appspot.com",
  messagingSenderId: "850441611030",
  appId: "1:850441611030:web:c2854ff68ac07aab55d237"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;


