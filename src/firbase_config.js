
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getAuth} from 'firebase/auth';
  import {getDatabase} from 'firebase/database';
  import {getStorage} from 'firebase/storage'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvkjA8tJXOqXL44T5dUQdTVVOoRSFRUzU",
    authDomain: "cws-project-e77af.firebaseapp.com",
    databaseUrl:'https://cws-project-e77af-default-rtdb.firebaseio.com',
    projectId: "cws-project-e77af",
    storageBucket: "gs://cws-project-e77af.appspot.com",
    messagingSenderId: "979451072455",
    appId: "1:979451072455:web:188225aee2c8108b3193e2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  const auth = getAuth(app)
  const store = getStorage(app)

  export {
    auth,db,store
  }