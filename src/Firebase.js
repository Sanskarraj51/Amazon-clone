import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuNlKO_8oE4XNiJJglIev9Q38P3G2_6po",
  authDomain: "clone-46a51.firebaseapp.com",
  projectId: "clone-46a51",
  storageBucket: "clone-46a51.appspot.com",
  messagingSenderId: "386351637718",
  appId: "1:386351637718:web:31b17923612c46c614d577",
  measurementId: "G-JC8RN3ECBP"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth , provider};
export default db ;