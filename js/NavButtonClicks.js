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

  $('#MapPage').addClass('hide');

  $('#ContactPage').addClass('hide');

  // setting button active colors

  $('#AboutButton').addClass('activetext');
  $('#AboutButtonTwo').addClass('activetexttwo');

  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');
}



// ABOUT BUTTONS BOTH IN NAV AND SLIDE OUT

$('#AboutButton').click(function() {

  $('#AboutPage').removeClass('hide');
  $('#AboutPage').addClass('show');

  $('#MapPage').removeClass('show');
  $('#MapPage').addClass('hide');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#AboutButton').removeClass('inactivetext');
  $('#AboutButtonTwo').removeClass('inactivetext');
  $('#AboutButton').addClass('activetext');
  $('#AboutButtonTwo').addClass('activetexttwo');

  $('#MapButton').removeClass('activetext');
  $('#MapButtonTwo').removeClass('activetexttwo');
  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

$('#AboutButtonTwo').click(function() {

  $('#AboutPage').removeClass('hide');
  $('#AboutPage').addClass('show');

  $('#MapPage').removeClass('show');
  $('#MapPage').addClass('hide');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#AboutButton').removeClass('inactivetext');
  $('#AboutButtonTwo').removeClass('inactivetext');
  $('#AboutButton').addClass('activetext');
  $('#AboutButtonTwo').addClass('activetexttwo');

  $('#MapButton').removeClass('activetext');
  $('#MapButtonTwo').removeClass('activetexttwo');
  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

// DOGMENT BUTTONS (both in nav and slide out)

$('#MapButton').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#MapPage').removeClass('hide');
  $('#MapPage').addClass('show');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#MapButton').removeClass('inactivetext');
  $('#MapButtonTwo').removeClass('inactivetext');
  $('#MapButton').addClass('activetext');
  $('#MapButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

$('#MapButtonTwo').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#MapPage').removeClass('hide');
  $('#MapPage').addClass('show');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#MapButton').removeClass('inactivetext');
  $('#MapButtonTwo').removeClass('inactivetext');
  $('#MapButton').addClass('activetext');
  $('#MapButtonTwo').addClass('activetexttwo');

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

// PUP PROFILE BUTTONS (both in nav and slide out)

$('#PupProfileButton').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#MapPage').removeClass('show');
  $('#MapPage').addClass('hide');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#MapButton').removeClass('activetext');
  $('#MapButtonTwo').removeClass('activetexttwo');
  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

$('#PupProfileButtonTwo').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#MapPage').removeClass('show');
  $('#MapPage').addClass('hide');

  $('#ContactPage').removeClass('show');
  $('#ContactPage').addClass('hide');

  // -------------------------------------
  // changing button color

  $('#AboutButton').removeClass('activetext');
  $('#AboutButtonTwo').removeClass('activetexttwo');
  $('#AboutButton').addClass('inactivetext');
  $('#AboutButtonTwo').addClass('inactivetext');

  $('#MapButton').removeClass('activetext');
  $('#MapButtonTwo').removeClass('activetexttwo');
  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

  $('#ContactButton').removeClass('activetext');
  $('#ContactButtonTwo').removeClass('activetexttwo');
  $('#ContactButton').addClass('inactivetext');
  $('#ContactButtonTwo').addClass('inactivetext');

});

// CONTACT BUTTONS (both in nav and slide out)

$('#ContactButton').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#MapPage').removeClass('show');
  $('#MapPage').addClass('hide');

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

  $('#MapButton').removeClass('activetext');
  $('#MapButtonTwo').removeClass('activetexttwo');
  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

});

$('#ContactButtonTwo').click(function() {

  $('#AboutPage').removeClass('show');
  $('#AboutPage').addClass('hide');

  $('#MapPage').removeClass('show');
  $('#MapPage').addClass('hide');

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

  $('#MapButton').removeClass('activetext');
  $('#MapButtonTwo').removeClass('activetexttwo');
  $('#MapButton').addClass('inactivetext');
  $('#MapButtonTwo').addClass('inactivetext');

});