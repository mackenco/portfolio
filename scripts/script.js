/* 
 * TODO: CSS lint, build process, webkit stuff
 */

var work = document.querySelector('.work');
var workIcon = document.querySelector(".work-icon-container svg");

var about = document.querySelector('.about');
var aboutIcon = document.querySelector(".about-icon-container svg");

var aboutToHome = document.querySelector('.about-to-home');
var workToHome = document.querySelector('.work-to-home');

var links = [[work, workIcon], [about, aboutIcon]];
var homeLinks = [aboutToHome, workToHome];

var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var bio = document.querySelector('.bio');
var selectedIndex = -1;

links.forEach(function(link, i) {
  link[0].addEventListener("mouseenter", function() {
    link[1].classList.add('animate'); 
  });

  link[0].addEventListener("mouseleave", function() {
    link[1].classList.remove('animate'); 
  });

  link[0].addEventListener("click", function() {
    var otherID = link[0].id === 'about' ? '.work' : '.about';
    selectedIndex = i;

    h1.classList.add('disappear-up'); 
    h2.classList.add('disappear-down'); 
    link[0].classList.add('link-stay');
    link[1].classList.remove('on-hover');
    document.querySelector(otherID + '-to-home').classList.remove('hide');
    document.querySelector(otherID).classList.add('inactive');

    setTimeout(function() { 
      bio.classList.add('quick-fade');
      bio.classList.remove('hide');
      h1.classList.add('hide');
      h1.classList.remove('disappear-up'); 
      h2.classList.remove('disappear-down'); 
      h2.classList.add('hide');
    }, 500);
  });
});

homeLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    h1.classList.remove('hide');
    h2.classList.remove('hide');
    bio.classList.add('hide');
    links[selectedIndex][0].classList.remove('link-stay');
    links[selectedIndex][1].classList.add('on-hover');
    document.querySelector('.inactive').classList.remove('inactive');
    this.classList.add('hide');
  });
});
