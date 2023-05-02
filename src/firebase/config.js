// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADmnUitzee2Ym9K34arfwHXZMQiOm0Aqw",
  authDomain: "afflecks-hqs.firebaseapp.com",
  projectId: "afflecks-hqs",
  storageBucket: "afflecks-hqs.appspot.com",
  messagingSenderId: "846586261107",
  appId: "1:846586261107:web:b3aea94b31d0d3cc0c4406",
  measurementId: "G-7BZRVVC35K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const authentication = getAuth(app);
export {authentication}