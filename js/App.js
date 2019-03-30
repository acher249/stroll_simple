// SideNav Slideout
var user;

$(document).ready(function(){

  user = firebase.auth().currentUser;

  CheckUser();

  $('.sidenav').sidenav();

  // Sign In Modal Managment
  StartWithTabsOff();
  $('.modal').modal();

  // hide this because we start with sign up
  $('.signinbuttonmain').addClass('hide'); // main sign up button in modal
  $('.signupbuttontopright-signup').addClass('hide');

  // hide firebase login data
  $('.firebaselogindata').addClass('hide');

});

// -------------------------------------
// SIGN IN MODAL MANAGMENT
// -------------------------------------

StartWithTabsOff = () => {

  $('#DogmentButton').removeClass('show');
  $('#DogmentButton').addClass('hide');

  $('#PupProfileButton').removeClass('show');
  $('#PupProfileButton').addClass('hide');

  $('#DogmentButtonTwo').removeClass('show');
  $('#DogmentButtonTwo').addClass('hide');

  $('#PupProfileButtonTwo').removeClass('show');
  $('#PupProfileButtonTwo').addClass('hide');

};

  // clicking sign up top right button
$('.signupbuttontopright-signup').click(function() {

  $('.signupbuttonmain').removeClass('hide');
  $('.signupbuttonmain').addClass('show');

  $('.signinbuttonmain').removeClass('show');
  $('.signinbuttonmain').addClass('hide');

  // $('.signupdatainputs').removeClass('hide');
  // $('.signupdatainputs').addClass('show');

  $('.signtoggle').text('Sign Up');

  // show the right top right button
  $('.signupbuttontopright-signup').removeClass('show');
  $('.signupbuttontopright-signup').addClass('hide');

  $('.signupbuttontopright-signin').removeClass('hide');
  $('.signupbuttontopright-signin').addClass('show');
});

// clicking sign in top right button
$('.signupbuttontopright-signin').click(function() {

  $('.signupbuttonmain').removeClass('show');
  $('.signupbuttonmain').addClass('hide');

  $('.signinbuttonmain').removeClass('hide');
  $('.signinbuttonmain').addClass('show');

  // $('.signupdatainputs').removeClass('show');
  // $('.signupdatainputs').addClass('hide');

  $('.signtoggle').text('Sign In');

  // show the right top right button
  $('.signupbuttontopright-signin').removeClass('show');
  $('.signupbuttontopright-signin').addClass('hide');

  $('.signupbuttontopright-signup').removeClass('hide');
  $('.signupbuttontopright-signup').addClass('show');

});

// -------------------------------------
// NAV - Clicking Sign In vs Sign Up
// -------------------------------------

$('#signUpButtonNav').click(function() {

  $('.signtoggle').text('Sign Up');

  // show the right top right button
  $('.signupbuttontopright-signin').removeClass('hide');
  $('.signupbuttontopright-signin').addClass('show');

  $('.signupbuttontopright-signup').removeClass('show');
  $('.signupbuttontopright-signup').addClass('hide');

  // turn on correct main button
  $('.signupbuttonmain').removeClass('hide');
  $('.signupbuttonmain').addClass('show');

  $('.signinbuttonmain').removeClass('show');
  $('.signinbuttonmain').addClass('hide');

  // if user is signed in, turn everything in modal off escept sign out
  if(firebase.auth().currentUser){

    HideEverythingInModalExceptSignOut();

  }

});

$('#signInButtonNav').click(function() {

  $('.signtoggle').text('Sign In');

  // show the right top right button
  $('.signupbuttontopright-signin').removeClass('show');
  $('.signupbuttontopright-signin').addClass('hide');

  $('.signupbuttontopright-signup').removeClass('hide');
  $('.signupbuttontopright-signup').addClass('show');

  // turn on correct main button
  $('.signupbuttonmain').removeClass('show');
  $('.signupbuttonmain').addClass('hide');

  $('.signinbuttonmain').removeClass('hide');
  $('.signinbuttonmain').addClass('show');

});

$('#signUpButtonSideNav').click(function() {

  $('.signtoggle').text('Sign Up');

  // show the right top right button
  $('.signupbuttontopright-signin').removeClass('hide');
  $('.signupbuttontopright-signin').addClass('show');

  $('.signupbuttontopright-signup').removeClass('show');
  $('.signupbuttontopright-signup').addClass('hide');

  // turn on correct main button
  $('.signupbuttonmain').removeClass('hide');
  $('.signupbuttonmain').addClass('show');

  $('.signinbuttonmain').removeClass('show');
  $('.signinbuttonmain').addClass('hide');

  // if user is signed in, turn everything in modal off escept sign out
  if(firebase.auth().currentUser){

    HideEverythingInModalExceptSignOut();
    
  }

});

$('#signInButtonSideNav').click(function() {

  $('.signtoggle').text('Sign In');

  // show the right top right button
  $('.signupbuttontopright-signin').removeClass('show');
  $('.signupbuttontopright-signin').addClass('hide');

  $('.signupbuttontopright-signup').removeClass('hide');
  $('.signupbuttontopright-signup').addClass('show');

  // turn on correct main button
  $('.signupbuttonmain').removeClass('show');
  $('.signupbuttonmain').addClass('hide');

  $('.signinbuttonmain').removeClass('hide');
  $('.signinbuttonmain').addClass('show');

});

// --------------------------------------------------
// turn off all other things in sign in Modal
// --------------------------------------------------

HideEverythingInModalExceptSignOut = () => {

  $('.signupbuttonmain').removeClass('show');
  $('.signupbuttonmain').addClass('hide');

  $('.signinbuttonmain').removeClass('hide');
  $('.signinbuttonmain').addClass('show');

  // $('.signupdatainputs').removeClass('show');
  // $('.signupdatainputs').addClass('hide');

  $('.signtoggle').text('Sign Out');

  // show the right top right button
  $('.signupbuttontopright-signup').removeClass('show');
  $('.signupbuttontopright-signup').addClass('hide');

  $('.signupbuttontopright-signin').removeClass('show');
  $('.signupbuttontopright-signin').addClass('hide');

};


// -------------------------------------
// MATERIALIZE COMPONENT INITIALIZATION
// -------------------------------------

// Material box Initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});
       

// Slider on About Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });

//Pupper Birthdate Picker
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

// welcomeAlert();

//Alerts
function welcomeAlert() {    
swal({
    title: "Welcome to AugDog",
    icon: "success",
    text: "Get ready to enter Dogmented Reality",
    button: "Enter", 
})
.then(() => {
        //focus the input field so that the user can just start typing
        // document.getElementById("inputForm").focus();
    });
};

//#region Change Tab Title
(function() {
var hidden = "hidden";
var oldtitle = document.title;
var currenttitle;

// Standards based on browsers:
if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
// IE 9 and lower:
else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
// All others:
else
    window.onpageshow = window.onpagehide
        = window.onfocus = window.onblur = onchange;

//if tab change happens set status to either hidden or visible
function onchange (evt) {
    var v = "visible", h = "hidden",
        evtMap = {   //check events and set status based on event type
            focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };

    evt = evt || window.event;
    if (evt.type in evtMap) {  // check the title
        currenttitle = oldtitle;
        $(document).attr('title', currenttitle);
    }
    else { // We are in hidden state so create unique title
        currenttitle = this[hidden] ? "Hey, Come Back! :( " : oldtitle; //update to whatever you want
        $(document).attr('title', currenttitle);
    }

}

// set the initial state (but only if browser supports the Page Visibility API)
if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();
//#endregion