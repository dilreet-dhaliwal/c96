const firebaseConfig = {
      apiKey: "AIzaSyCZyRmEJAjaHf_Ju9fIKf0xdalcCKDzTc4",
      authDomain: "kwitter-ecfdc.firebaseapp.com",
      databaseURL: "https://kwitter-ecfdc-default-rtdb.firebaseio.com",
      projectId: "kwitter-ecfdc",
      storageBucket: "kwitter-ecfdc.appspot.com",
      messagingSenderId: "910540217083",
      appId: "1:910540217083:web:b4092b19278b12c5f2ee5e",
      measurementId: "G-HLTLKSV56Q"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
}
//End code
      } });  }); }
getData();
