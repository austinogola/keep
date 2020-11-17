import React from 'react'

var firebaseConfig = {
    apiKey: "AIzaSyBg7n5bp37D3MfCiL5gPuyrY1iQ5jUBh7E",
    authDomain: "keep-1539b.firebaseapp.com",
    databaseURL: "https://keep-1539b.firebaseio.com",
    projectId: "keep-1539b",
    storageBucket: "keep-1539b.appspot.com",
    messagingSenderId: "234792646898",
    appId: "1:234792646898:web:2a036f8543bd8abec6f86b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db=firebase.firestore()
  db.settings({timestampsInSnapshots:true})