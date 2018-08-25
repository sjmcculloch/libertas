import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCm2AhbsLlEGWaVjalusT4liZ3nM-EMpm0',
  authDomain: 'libertas-4472b.firebaseapp.com',
  databaseURL: 'https://libertas-4472b.firebaseio.com',
  projectId: 'libertas-4472b',
  storageBucket: '',
  messagingSenderId: '572289224519'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
