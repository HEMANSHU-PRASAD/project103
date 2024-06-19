// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBsN6Ehfe_lSlP1MV08TyrVbwIbWwHTyZk",
    authDomain: "twitter--ka-sasta-copy.firebaseapp.com",
    projectId: "twitter--ka-sasta-copy",
    storageBucket: "twitter--ka-sasta-copy.appspot.com",
    messagingSenderId: "923928126415",
    appId: "1:923928126415:web:c07533551eb4460e25e8ba",
    measurementId: "G-B4H7QH5FGV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = chat_room.html;

}