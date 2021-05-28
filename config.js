 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_MFD2yKivEeGBUnObJd2mWJZZkVqFqg4",
  authDomain: "attendance-app-1-c3a72.firebaseapp.com",
  databaseURL: "https://attendance-app-1-c3a72-default-rtdb.firebaseio.com",
  projectId: "attendance-app-1-c3a72",
  storageBucket: "attendance-app-1-c3a72.appspot.com",
  messagingSenderId: "138152576694",
  appId: "1:138152576694:web:6249006c1625e62a5fc817"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
  
 

  