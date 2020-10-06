// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCb8qX4jEdT4Jyd47J8W3dqeavS8JDYLrg',
  authDomain: 'todos-react-24d8b.firebaseapp.com',
  databaseURL: 'https://todos-react-24d8b.firebaseio.com',
  projectId: 'todos-react-24d8b',
  storageBucket: 'todos-react-24d8b.appspot.com',
  messagingSenderId: '194932604496',
  appId: '1:194932604496:web:4fc3749bde3458cd47db55',
  measurementId: 'G-9LD8HB2BQL',
});

const db = firebaseApp.firestore();

export default db;
