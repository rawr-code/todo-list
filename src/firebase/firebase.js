import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyClyo0EwJEtM1KiYDgekxi2WSZjcgg-GFI',
  authDomain: 'todo-list-5639f.firebaseapp.com',
  databaseURL: 'https://todo-list-5639f.firebaseio.com',
  projectId: 'todo-list-5639f',
  storageBucket: 'todo-list-5639f.appspot.com',
  messagingSenderId: '660293071272',
  appId: '1:660293071272:web:cc54c73b1b7c656b'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
