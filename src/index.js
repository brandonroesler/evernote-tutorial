import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore')

firebase.initializeApp ({
    apiKey: "AIzaSyCpXoI_Ai5nw5Zn2740BBiwePW1UUypY5s",
    authDomain: "evernote-clone-8b562.firebaseapp.com",
    databaseURL: "https://evernote-clone-8b562.firebaseio.com",
    projectId: "evernote-clone-8b562",
    storageBucket: "evernote-clone-8b562.appspot.com",
    messagingSenderId: "228902656592",
    appId: "1:228902656592:web:dbf27b5ece32098b"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
