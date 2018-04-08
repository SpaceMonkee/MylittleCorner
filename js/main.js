//carousel for mobile

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

//navbar

// Initial scroll position
var scrollState = 0;

// Store navbar classes
var navClasses = document.getElementById('navBar').classList;

// returns current scroll position
var scrollTop = function() {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

function downAction() {
  navClasses.remove('open');
  navClasses.add('collapse');
}

function upAction() {
  navClasses.remove('collapse');
  navClasses.add('open');
}

window.addEventListener("scroll", function() {
  scrollDetect(homeAction, downAction, upAction);
});

// Change theme

function swapstylesheet(sheet){
    document.getElementById('styles').setAttribute('href', sheet);
}