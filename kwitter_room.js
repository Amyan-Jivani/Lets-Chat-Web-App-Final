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
    document.getElementById("user_name").innerHTML= "Welcome"+ user_name + "!";

    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding_room_name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names"+ Room_names);
      row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}