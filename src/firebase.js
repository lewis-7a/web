import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp( {
// Firebase config here
    apiKey: "AIzaSyCNeVoukd4qld6Ry1ecqDadCAKNI6tdtjE",
    authDomain: "res-life-task.firebaseapp.com",
    projectId: "res-life-task",
    storageBucket: "res-life-task.appspot.com",
    messagingSenderId: "379279562114",
    appId: "1:379279562114:web:a7482249ac5d298b5fab9b"
});

const db = firebaseApp.firestore();

// Export for components to use
export { db };