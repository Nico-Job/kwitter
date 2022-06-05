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
    
    user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");
      function send() { msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
        document.getElementById("msg").value = "";
       }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
