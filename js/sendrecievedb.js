$(document).ready(function(){
  
  // wait so that firebase has time to sign the user in..
  setTimeout(GetDataFromDB, 500); 
  getLocation();

});

var currentLat;
var currentLong;

$('.SendLocation').click(function() {

    SendCurrentLocationToDB();

});

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  currentLat = position.coords.latitude;
  currentLong = position.coords.longitude;

  console.log(currentLat);
  console.log(currentLong);
}

var SendCurrentLocationToDB = () => {

  user = firebase.auth().currentUser;
  var database = firebase.database();

  var email = user.email;

  // split this to get rid of the file extension 
  var split = email.split("@");
  var userName = split[0];

  var d = Date();
  var currentTime = d.toString();
  console.log(currentTime);

  // if we need multiple doges.. need further hierarchy
  // database.ref().child(user.uid + "/" + pupperName ).update({
  database.ref().child(user.uid).update({

    //SCHEMA
    userName: userName,
    email: email,
    currentLat: currentLat,
    currentLong: currentLong,
  });
};

var GetDataFromDB = () => {
  console.log("ran GetDataFromDB()");

  user = firebase.auth().currentUser;
  var database = firebase.database();

  //user needs to be logged in
  if (firebase.auth().currentUser){

    var ref = database.ref().child(user.uid);

    ref.once("value")
    .then(function(snapshot) {

      // get main user information
      var userName = snapshot.child("userName").val();
      var email = snapshot.child("email").val();

      // get main pupper information
      var currentLat = snapshot.child("currentLat").val();
      var currentLong = snapshot.child("currentLong").val();

      console.log("userName from db: " + userName);
      console.log("email from db: " + email);
      console.log("currentLat from db: " + currentLat);
      console.log("currentLong from db: " + currentLong);

      // now do things with the data..

    });
  }
}
