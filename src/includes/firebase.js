import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAh3r53AQkO9SuQbxJqhLJAp_RVeWwNut4',
  authDomain: 'music-ba7f0.firebaseapp.com',
  projectId: 'music-ba7f0',
  storageBucket: 'music-ba7f0.appspot.com',
  appId: '1:326240443711:web:f170acb669f293f264878a'
}

// initialize firebase
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage();


const userCollection = db.collection('users');
const songsCollection = db.collection("songs");

export {
  auth,
  db,
  userCollection,
  songsCollection,
  storage
}
