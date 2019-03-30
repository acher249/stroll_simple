$(document).ready(function(){

    user = firebase.auth().currentUser;

    // use this to close side nav on login or logout.. need to also close auth modal..
    $('.sidenav')
      .sidenav()
      .on('click tap', 'li a', () => {
          $('.sidenav').sidenav('close');
    });

    $('.sideNav').sidenav();

    StartAppPageSetup();
});

//need to learn how to throw a list of buttons into an array

function StartAppPageSetup(){
  $('#AboutPage').addClass('show');

  $('#DogmentPage').addClass('hide');

  $('#PupProfilePage').addClass('hide');

  $('#ContactPage').addClass('hide');


  // setting button active colors

  $('#AboutButton').addClass('activetext');
  $('#AboutButtonTwo').addClass('activetexttwo');

  $('#DogmentButton').addClass('inactivetext');
  $('#DogmentButtonTwo').addClass('inactivetext');

  $('#PupProfileButton').addClass('inactivetext');
  $('#PupProfileButtonTwo').addClass('inactivetext');

  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');
}



// ABOUT BUTTONS BOTH IN NAV AND SLIDE OUT

$('#AboutButton').click(function() {

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

});

$('#AboutButtonTwo').click(function() {

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

});

// DOGMENT BUTTONS (both in nav and slide out)

$('#DogmentButton').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#DogmentPage').removeClass('hide');
  $('#DogmentPage').addClass('show');

  $('#PupProfilePage').removeClass('show');
  $('#PupProfilePage').addClass('hide');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#DogmentButton').removeClass('inactivetext');
  $('#DogmentButtonTwo').removeClass('inactivetext');
  $('#DogmentButton').addClass('activetext');
  $('#DogmentButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#PupProfileButton').removeClass('activetext');
  $('#PupProfileButtonTwo').removeClass('activetexttwo');
  $('#PupProfileButton').addClass('inactivetext');
  $('#PupProfileButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

$('#DogmentButtonTwo').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#DogmentPage').removeClass('hide');
  $('#DogmentPage').addClass('show');

  $('#PupProfilePage').removeClass('show');
  $('#PupProfilePage').addClass('hide');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#DogmentButton').removeClass('inactivetext');
  $('#DogmentButtonTwo').removeClass('inactivetext');
  $('#DogmentButton').addClass('activetext');
  $('#DogmentButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#PupProfileButton').removeClass('activetext');
  $('#PupProfileButtonTwo').removeClass('activetexttwo');
  $('#PupProfileButton').addClass('inactivetext');
  $('#PupProfileButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

// PUP PROFILE BUTTONS (both in nav and slide out)

$('#PupProfileButton').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#DogmentPage').removeClass('show');
  $('#DogmentPage').addClass('hide');

  $('#PupProfilePage').removeClass('hide');
  $('#PupProfilePage').addClass('show');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#PupProfileButton').removeClass('inactivetext');
  $('#PupProfileButtonTwo').removeClass('inactivetext');
  $('#PupProfileButton').addClass('activetext');
  $('#PupProfileButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#DogmentButton').removeClass('activetext');
  $('#DogmentButtonTwo').removeClass('activetexttwo');
  $('#DogmentButton').addClass('inactivetext');
  $('#DogmentButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

$('#PupProfileButtonTwo').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#DogmentPage').removeClass('show');
  $('#DogmentPage').addClass('hide');

  $('#PupProfilePage').removeClass('hide');
  $('#PupProfilePage').addClass('show');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#PupProfileButton').removeClass('inactivetext');
  $('#PupProfileButtonTwo').removeClass('inactivetext');
  $('#PupProfileButton').addClass('activetext');
  $('#PupProfileButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#DogmentButton').removeClass('activetext');
  $('#DogmentButtonTwo').removeClass('activetexttwo');
  $('#DogmentButton').addClass('inactivetext');
  $('#DogmentButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

// CONTACT BUTTONS (both in nav and slide out)

$('#ContactButton').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#DogmentPage').removeClass('show');
  $('#DogmentPage').addClass('hide');

  $('#PupProfilePage').removeClass('show');
  $('#PupProfilePage').addClass('hide');

  $('#ContactPage').removeClass('hide');
  $('#ContactPage').addClass('show');

  // -------------------------------------
  // changing button color

  $('#ContactButton').removeClass('inactivetext');
  $('#ContactButtonTwo').removeClass('inactivetext');
  $('#ContactButton').addClass('activetext');
  $('#ContactButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#DogmentButton').removeClass('activetext');
  $('#DogmentButtonTwo').removeClass('activetexttwo');
  $('#DogmentButton').addClass('inactivetext');
  $('#DogmentButtonTwo').addClass('inactivetext');

  $('#PupProfileButton').removeClass('activetext');
  $('#PupProfileButtonTwo').removeClass('activetexttwo');
  $('#PupProfileButton').addClass('inactivetext');
  $('#PupProfileButtonTwo').addClass('inactivetext');

});

$('#ContactButtonTwo').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#DogmentPage').removeClass('show');
  $('#DogmentPage').addClass('hide');

  $('#PupProfilePage').removeClass('show');
  $('#PupProfilePage').addClass('hide');

  $('#ContactPage').removeClass('hide');
  $('#ContactPage').addClass('show');

  // -------------------------------------
  // changing button color

  $('#ContactButton').removeClass('inactivetext');
  $('#ContactButtonTwo').removeClass('inactivetext');
  $('#ContactButton').addClass('activetext');
  $('#ContactButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#DogmentButton').removeClass('activetext');
  $('#DogmentButtonTwo').removeClass('activetexttwo');
  $('#DogmentButton').addClass('inactivetext');
  $('#DogmentButtonTwo').addClass('inactivetext');

  $('#PupProfileButton').removeClass('activetext');
  $('#PupProfileButtonTwo').removeClass('activetexttwo');
  $('#PupProfileButton').addClass('inactivetext');
  $('#PupProfileButtonTwo').addClass('inactivetext');

});