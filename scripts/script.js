/* 
 * TODO: CSS lint, build process, webkit stuff
 */

var workLink = document.querySelector('.work-link');
var workIcon = document.querySelector(".work-icon-container svg");

var aboutLink = document.querySelector('.about-link');
var aboutIcon = document.querySelector(".about-icon-container svg");

var aboutToHome = document.querySelector('.about-to-home');
var workToHome = document.querySelector('.work-to-home');

var pairs = { about: 'work', work: 'about' };
var links = [[workLink, workIcon], [aboutLink, aboutIcon]];
var homeLinks = [aboutToHome, workToHome];

var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var selectedIndex = -1;

for (var section in pairs) { 
  var l0 = document.querySelector('.' + pairs[section] + '-link');
  var l1 = document.querySelector('.' + pairs[section] + '-icon-container svg');
  var link = [l0, l1];
// links.forEach(function(link, i) {
  link[0].addEventListener("mouseenter", function() {
    link[1].classList.add('animate'); 
  });

  link[0].addEventListener("mouseleave", function() {
    link[1].classList.remove('animate'); 
  });

  link[0].addEventListener("click", function() {
    var selectedSection = this.parentElement.id;
    var otherSection = "." + pairs[selectedSection];
    selectedIndex = i;

    h1.classList.add('disappear-up'); 
    h2.classList.add('disappear-down'); 
    link[0].classList.add('link-stay');
    link[1].classList.remove('on-hover');
    document.querySelector(otherSection+ '-to-home').classList.remove('hide');
    document.querySelector(otherSection + '-link').classList.add('inactive');
    content = document.querySelector('.' + selectedSection + '-content');

    setTimeout(function() { 
      content.classList.add('quick-fade');
      content.classList.remove('hide');
      h1.classList.add('hide');
      h1.classList.remove('disappear-up'); 
      h2.classList.remove('disappear-down'); 
      h2.classList.add('hide');
    }, 500);
  });
// });
}

homeLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    content = document.querySelector("." + pairs[this.parentElement.id] + "-content");
    content.classList.add('hide');
    h1.classList.remove('hide');
    h2.classList.remove('hide');
    links[selectedIndex][0].classList.remove('link-stay');
    links[selectedIndex][1].classList.add('on-hover');
    document.querySelector('.inactive').classList.remove('inactive');
    this.classList.add('hide');
  });
});
