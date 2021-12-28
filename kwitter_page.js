const firebaseConfig = {
    apiKey: "AIzaSyAE26IyNM3ekKlgFrL717XafTbidVUKZTk",
    authDomain: "lets-chat-web-app-b40d4.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b40d4-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b40d4",
    storageBucket: "lets-chat-web-app-b40d4.appspot.com",
    messagingSenderId: "1049424200302",
    appId: "1:1049424200302:web:cbd3b160e81e7035c8dc7f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
 message= document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
     Name: user_name, 
     Message: message, 
     Like: 0
 });
 document.getElementById("msg").value="";
}