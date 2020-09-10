import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDYutA1OHYQ27lGPHSu2FGDIkgtHVQfgR8",
    authDomain: "star-wars-voting.firebaseapp.com",
    databaseURL: "https://star-wars-voting.firebaseio.com",
    projectId: "star-wars-voting",
    storageBucket: "star-wars-voting.appspot.com",
    messagingSenderId: "1092721397548",
    appId: "1:1092721397548:web:0ca37c625ddba4a5686689"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
