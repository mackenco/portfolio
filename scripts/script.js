/* 
 * TODO: CSS lint, build process
 */

var work = document.querySelector('#work');
var workIcon = document.querySelector("#work-icon-container svg");

var about = document.querySelector('#about');
var aboutIcon = document.querySelector("#about-icon-container svg");

var links = [[work, workIcon], [about, aboutIcon]];

var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

links.forEach(function(link) {
  link[0].addEventListener("mouseenter", function() {
    link[1].classList.add('animate'); 
  });

  link[0].addEventListener("mouseleave", function() {
    link[1].classList.remove('animate'); 
  });

  link[0].addEventListener("click", function() {
    var otherID = link[0].id === 'about' ? '#work' : '#about';

    h1.classList.add('disappear-up'); 
    h2.classList.add('disappear-down'); 
    link[0].classList.add('link-stay');
    link[1].classList.remove('on-hover');
    document.querySelector(otherID + '-to-home').classList.remove('hide');
    document.querySelector(otherID).classList.add('hide');
  });
});
