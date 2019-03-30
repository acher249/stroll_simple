/**
 * Handles the sign in button press.
 */
var user;

$(document).ready(function(){

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // use this to close side nav on login or logout.. need to also close auth modal..
  $('.sidenav').sidenav()
  .on('click tap', '.signinbuttonmain', () => {
      $('.sidenav').sidenav('close');
  });

  user = firebase.auth().currentUser;

  CheckUser();

});


// need also check with the side bar below
// this is on Auth state changed.. Below toggleSignIn() is on click..
CheckUser = () => {
  // console.log("checking if user is signed in..");

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // console.log(user);

      var userEmail = user.email;
      var split = userEmail.split("@");
      var firstHalf = split[0];
      var userName = firstHalf.toLowerCase();
      
      //nav buttons
      $('#signUpButtonNav').text(userName);
      $('#signUpButtonSideNav').text(userName);

      TurnTabsOnWhenSignedIn();

      TurnOffNavSignInButtonWhenSignedIn();

      // Turn off all elements in modal except sign out
      // and turn sigin in and sign up text to Sign Out


    } else {

      // No user is signed in.
      console.log("Not signed in..");

      console.log(firebase.auth().currentUser);

      //nav buttons
      $('#signUpButtonNav').text("Sign up");
      $('#signUpButtonSideNav').text("Sign up");

      TurnTabsOffWhenSignedOut();

      TurnOnNavSignInButtonWhenSignedOut();

      //Turn on all elements in modal
      // and turn sigin out back to sign up

    }
  });
}

TurnOffNavSignInButtonWhenSignedIn = () => {

  $('#signInButtonNav').removeClass('show');
  $('#signInButtonNav').addClass('hide');

  $('#signInButtonSideNav').removeClass('show');
  $('#signInButtonSideNav').addClass('hide');

  $("#signUpButtonNav").css({"margin-right":"14px"});

}

TurnOnNavSignInButtonWhenSignedOut = () => {

  $('#signInButtonNav').removeClass('hide');
  $('#signInButtonNav').addClass('show');

  $('#signInButtonSideNav').removeClass('hide');
  $('#signInButtonSideNav').addClass('show');

  $("#signUpButtonNav").css({"margin-right":"0px"});

    // TO DO
    // turn back on all other things in sign in Modal

}

TurnTabsOnWhenSignedIn = () => {

  $('#DogmentButton').removeClass('hide');
  $('#DogmentButton').addClass('show');

  $('#PupProfileButton').removeClass('hide');
  $('#PupProfileButton').addClass('show');

  $('#DogmentButtonTwo').removeClass('hide');
  $('#DogmentButtonTwo').addClass('show');

  $('#PupProfileButtonTwo').removeClass('hide');
  $('#PupProfileButtonTwo').addClass('show');
}

TurnTabsOffWhenSignedOut = () => {

  $('#DogmentButton').removeClass('show');
  $('#DogmentButton').addClass('hide');

  $('#PupProfileButton').removeClass('show');
  $('#PupProfileButton').addClass('hide');

  $('#DogmentButtonTwo').removeClass('show');
  $('#DogmentButtonTwo').addClass('hide');

  $('#PupProfileButtonTwo').removeClass('show');
  $('#PupProfileButtonTwo').addClass('hide');
}


// this is on click not on Auth state changed.. Above is on auth changed..
function toggleSignIn() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();

      // change to About Page when signed out...
      JumpToAboutPageOnSignOut();
      
      // close modal
      $('.modal.open').modal('close');

      // [END signout]
    } else {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }

      // close modal
      $('.modal.open').modal('close');

      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
    document.getElementById('quickstart-sign-in').disabled = true;
  }

  // handle sign up
  function handleSignUp() {
    console.log("clicked sign up");
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }

    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });

    // close modal
    $('.modal.open').modal('close');
    // find a good place to trigger this.
    // ThanksForSigningUp();

    // [END createwithemail]
  }

  function ThanksForSigningUp() {    
    swal({
        title: "Welcome to AugDog",
        icon: "success",
        text: "Thanks for creating your account, now have fun!",
        button: "Enter", 
    })
    .then(() => {
            //focus the input field so that the user can just start typing
            // document.getElementById("inputForm").focus();
        });
    };
  
  /**
   * Sends an email verification to the user.
   */
  function sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function() {
      // Email Verification sent!
      // [START_EXCLUDE]
      alert('Email Verification Sent!');
      // [END_EXCLUDE]
    });
    // [END sendemailverification]
  }
  
  function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // Password Reset Email Sent!
      // [START_EXCLUDE]
      alert('Password Reset Email Sent!');
      // [END_EXCLUDE]
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
  }

  JumpToAboutPageOnSignOut = () => {

    $('#AboutPage').removeClass('hide');
    $('#AboutPage').addClass('show');
  
    $('#DogmentPage').removeClass('show');
    $('#DogmentPage').addClass('hide');
  
    $('#PupProfilePage').removeClass('show');
    $('#PupProfilePage').addClass('hide');
  
    $('#ContactPage').removeClass('show');
    $('#ContactPage').addClass('hide');
  
    // -------------------------------------
    // changing button color
  
    $('#AboutButton').removeClass('inactivetext');
    $('#AboutButtonTwo').removeClass('inactivetext');
    $('#AboutButton').addClass('activetext');
    $('#AboutButtonTwo').addClass('activetexttwo');
  
    $('#DogmentButton').removeClass('activetext');
    $('#DogmentButtonTwo').removeClass('activetexttwo');
    $('#DogmentButton').addClass('inactivetext');
    $('#DogmentButtonTwo').addClass('inactivetext');
  
    $('#PupProfileButton').removeClass('activetext');
    $('#PupProfileButtonTwo').removeClass('activetexttwo');
    $('#PupProfileButton').addClass('inactivetext');
    $('#PupProfileButtonTwo').addClass('inactivetext');
  
    $('#ContactButton').removeClass('activetext');
    $('#ContactButtonTwo').removeClass('activetexttwo');
    $('#ContactButton').addClass('inactivetext');
    $('#ContactButtonTwo').addClass('inactivetext');

  }

  // FIREBASE AUTH BELOW
  
  /**
   * initApp handles setting up UI event listeners and registering Firebase auth listeners:
   *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
   *    out, and that is where we update the UI.
   */
  function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      document.getElementById('quickstart-verify-email').disabled = true;
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!emailVerified) {
          document.getElementById('quickstart-verify-email').disabled = false;
        }
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        document.getElementById('quickstart-sign-in').textContent = 'Sign in';
        document.getElementById('quickstart-account-details').textContent = 'null';
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE silent]
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authstatelistener]
  
    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
    document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
    document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
  }
  
  window.onload = function() {
    initApp();
  };