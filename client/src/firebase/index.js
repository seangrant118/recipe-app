import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAs7cDoyiTKT-LewIEJbsDkYVSnHHd6QZI",
  authDomain: "recipe-image-storage.firebaseapp.com",
  databaseURL: "https://recipe-image-storage.firebaseio.com",
  projectId: "recipe-image-storage",
  storageBucket: "recipe-image-storage.appspot.com",
  messagingSenderId: "196298709152",
  appId: "1:196298709152:web:7a434f955df4ad1a33d1c5",
  measurementId: "G-DPVNYH0MJS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
