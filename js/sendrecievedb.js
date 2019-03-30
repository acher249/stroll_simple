$(document).ready(function(){
  
  // wait so that firebase has time to sign the user in..
  setTimeout(GetDataFromDB, 500); 
  
});

$('.pupperButton').click(function() {
  SendPupperToDB();
});

$('.dogmentedRealitiesButton').click(function() {
  SendDogmentedRealityFavoritesToDB();
});


var SendPupperToDB = () => {

  user = firebase.auth().currentUser;
  var database = firebase.database();

  var pupperName = $(".pupperName").val();

  var pupperSize = $("input[type=radio][name=group1]:checked").val();

  var email = user.email;

  // split this to get rid of the file extension 
  var split = email.split("@");
  var userName = split[0];

  console.log(userName);
  console.log(email);
  console.log(pupperName);
  console.log(pupperSize);

  // if we need multiple doges.. need further hierarchy
  // database.ref().child(user.uid + "/" + pupperName ).update({
  database.ref().child(user.uid).update({

    //SCHEMA
    userName: userName,
    email: email,
    pupperName: pupperName,
    pupperSize: pupperSize

  });
};

var SendDogmentedRealityFavoritesToDB = () => {

  user = firebase.auth().currentUser;
  var database = firebase.database();

  var DogmentWhales = $('.DogmentWhales').prop('checked');
  var DogmentZombies = $('.DogmentZombies').prop('checked');

  // database.ref().child(user.uid + "/" + pupperName ).update({
  database.ref().child(user.uid + "/DogmentedRealities").update({

    //SCHEMA
    DogmentWhales: DogmentWhales,
    DogmentZombies: DogmentZombies

  });
};


var GetDataFromDB = () => {
  console.log("ran GetPuppersFromDB()");

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
      var pupperName = snapshot.child("pupperName").val();
      var pupperSize = snapshot.child("pupperSize").val();

      // get dogmented reality favorites from db
      var DogmentWhales = snapshot.child("/DogmentedRealities/DogmentWhales").val();
      var DogmentZombies = snapshot.child("/DogmentedRealities/DogmentZombies").val();

      console.log("userName from db: " + userName);
      console.log("email from db: " + email);
      console.log("pupperName from db: " + pupperName);
      console.log("pupperSize from db: " + pupperSize);

      console.log("DogmentWhales from db: " + DogmentWhales);
      console.log("DogmentZombies from db: " + DogmentZombies);

      // now do things with the data..
      // turn off the inputs to the pupper profile and display the pupper data from db..

      // turn this into a utility function..
      // Set the dogmented reality favorite checkboxes from the database data..
      if(DogmentWhales != null){
        if(DogmentWhales == true){
          $('.DogmentWhales').prop('checked', true);
        }else if (DogmentWhales == false){
          $('.DogmentWhales').prop('checked', false);
        }
      }
      if(DogmentZombies != null){
        if(DogmentZombies == true){
          $('.DogmentZombies').prop('checked', true);
        }else if (DogmentZombies == false){
          $('.DogmentZombies').prop('checked', false);
        }
      }

    });
  }
}
