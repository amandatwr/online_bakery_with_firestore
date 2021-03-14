import firebase from 'firebase';

const firebaseConfig={
    //Fill in your firebase details here
    apiKey: "AIzaSyBnS1-vEEP5r3J1JmEd9Cl1C9tAb6vPP7M",
    authDomain: "bt3103-2195f.firebaseapp.com",
    projectId: "bt3103-2195f",
    storageBucket: "bt3103-2195f.appspot.com",
    messagingSenderId: "808968119362",
    appId: "1:808968119362:web:6faf6341ab28ff0f3579db",
    measurementId: "G-PGDT1RFZPG"

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;