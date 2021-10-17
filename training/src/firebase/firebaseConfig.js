import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDml0ig551AeiVlGXhh0oWDBlJXPnSUPXs",
    authDomain: "reactfirebaseuim.firebaseapp.com",
    projectId: "reactfirebaseuim",
    storageBucket: "reactfirebaseuim.appspot.com",
    messagingSenderId: "1012785198072",
    appId: "1:1012785198072:web:79d9c326c07419309e1c0d"
};

const app = initializeApp(firebaseConfig);

export default app;