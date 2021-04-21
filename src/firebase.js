import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC1LhdUrlPbMF0HtWP2uT9FaEpSx_StD2k",
  authDomain: "portfolio-hrsshainik.firebaseapp.com",
  projectId: "portfolio-hrsshainik",
  storageBucket: "portfolio-hrsshainik.appspot.com",
  messagingSenderId: "233189951586",
  appId: "1:233189951586:web:09a447d0714bb74496e93b",
  measurementId: "G-GFD5X1FD6K",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = firebaseApp.analytics();
const database = firebaseApp.firestore();

export { database };
