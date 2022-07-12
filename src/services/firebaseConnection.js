// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:               "AIzaSyDyignxcXRsbUhv5jD_Cq2s47z127orLJg",
  authDomain:           "sistema-chamados-70587.firebaseapp.com",
  projectId:            "sistema-chamados-70587",
  storageBucket:        "sistema-chamados-70587.appspot.com",
  messagingSenderId:    "95413725135",
  appId:                "1:95413725135:web:bf2cdc83a001e597fad4ba",
  measurementId:        "G-4LZ02YYF4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app