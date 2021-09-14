import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAbukcIVaa1gqNKZnR8Uwj5DnDJTdVzhmI",
    authDomain: "olx-clone-3c589.firebaseapp.com",
    projectId: "olx-clone-3c589",
    storageBucket: "olx-clone-3c589.appspot.com",
    messagingSenderId: "497130743509",
    appId: "1:497130743509:web:63ff0cfef060eb88a7645c",
    measurementId: "G-L8NRX8B0ES"
  };

   export  default firebase.initializeApp(firebaseConfig)

  