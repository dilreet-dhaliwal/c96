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
    firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names);
      row="<div class='room_name'id ="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
}
function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}