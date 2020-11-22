import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyCz4lulYBjGthGgNYBGJb-ba918M7LV5GA",
        authDomain: "vueon-60e5f.firebaseapp.com",
        databaseURL: "https://vueon-60e5f.firebaseio.com",
        projectId: "vueon-60e5f",
        storageBucket: "vueon-60e5f.appspot.com",
        messagingSenderId: "963811422378",
        appId: "1:963811422378:web:5b413baa4171c3153060d3"
    })
    .firestore();

export const postRef = db.collection("posts");