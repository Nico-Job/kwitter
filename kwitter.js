const firebaseConfig = {
      apiKey: "AIzaSyAo7VJm1x3qMpjS-ZkYA187uigo92dpRHI",
      authDomain: "kwitter-e0b48.firebaseapp.com",
      databaseURL: "https://kwitter-e0b48-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0b48",
      storageBucket: "kwitter-e0b48.appspot.com",
      messagingSenderId: "21766733011",
      appId: "1:21766733011:web:870a7f1847012cbd26a826"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function addUser() 
{ 
    user_name = document.getElementById("user_name").value;
     localStorage.setItem("user_name", user_name);
      window.location = "kwitter_room.html";
     }
     user_name = localStorage.getItem("user_name");
	
	
room_name = localStorage.getItem("room_name");
 
 


firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  });
getData();
