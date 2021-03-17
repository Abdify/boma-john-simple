import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDNwQNEpFn2xhRw-2NtI8jDda1u9iwxoY",
    authDomain: "fir-fired.firebaseapp.com",
    projectId: "fir-fired",
    storageBucket: "fir-fired.appspot.com",
    messagingSenderId: "76263950342",
    appId: "1:76263950342:web:fcb330d8915160228a9b87",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
export const auth = firebase.auth();