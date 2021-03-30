import firebase from "firebase/app";
import secret from "./secret";
import "firebase/storage";

var firebaseConfig = {
  apiKey: process.env.apiKey || secret.apiKey,
  authDomain: process.env.authDomain || secret.authDomain,
  databaseURL: process.env.databaseURL || secret.databaseURL,
  projectId: process.env.projectId || secret.projectId,
  storageBucket: process.env.storageBucket || secret.storageBucket,
  messagingSenderId: process.env.messagingSenderId || secret.messagingSenderId,
  appId: process.env.appId || secret.appId,
  measurementId: process.env.measurementId || secret.measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
