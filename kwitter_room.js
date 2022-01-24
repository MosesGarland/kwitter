var firebaseConfig = {
    apiKey: "AIzaSyDcrRZEHsZ4eFQSVUtp78dqdqkO0rN090I",
    authDomain: "asdfghjkl-42da1.firebaseapp.com",
    databaseURL: "https://asdfghjkl-42da1-default-rtdb.firebaseio.com",
    projectId: "asdfghjkl-42da1",
    storageBucket: "asdfghjkl-42da1.appspot.com",
    messagingSenderId: "522379996446",
    appId: "1:522379996446:web:b7b802e6fcc53e2140ad0f"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig)
 user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addRoom()
 {
   room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
 
     localStorage.setItem("room_name", room_name);
     
     window.location = "kwitter_page.html";
 }
 
 function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 
 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
 }
 
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
     window.location = "index.html";
 }