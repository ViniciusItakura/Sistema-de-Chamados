import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDYegXuqpBTD_mFn9Lu0QmCbw1tFGfr-No",
    authDomain: "tickets-b0058.firebaseapp.com",
    projectId: "tickets-b0058",
    storageBucket: "tickets-b0058.appspot.com",
    messagingSenderId: "714543732062",
    appId: "1:714543732062:web:b7970c96e1f590babdebcf"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };