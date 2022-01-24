//YOUR FIREBASE LINKS
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
     user_name=localStorage.getItem("user_name")
     room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
namewithtag="<h4> "+ name +"<img class='user_tick' src='tick.png'>"
messagewithtag="<h4 class='message_h4'>" + message + "</h4>"
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
row=namewithtag+messagewithtag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function updateLike(messageid){
      buttonid=messageid
      likes=document.getElementById(buttonid).value
      updatedLikes=Number(likes)+1
      firebase.database().ref(room_name).child(messageid).update({
            like:updatedLikes
      });
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}
function news(){
      window.location="news_K.html" 
}
function send(){
      msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,like:0
});
document.getElementById("msg").value=""
}
