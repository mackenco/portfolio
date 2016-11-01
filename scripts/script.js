var work = document.querySelector('#work');
var workIcon = document.querySelector("#work-icon-container svg");

var about = document.querySelector('#about');
var aboutIcon = document.querySelector("#about-icon-container svg");

var icons = [[work, workIcon], [about, aboutIcon]];

icons.forEach(function(i) {
  i[0].addEventListener("mouseenter", function() {
    i[1].classList.add('animate'); 
  });

  i[0].addEventListener("mouseleave", function() {
    i[1].classList.remove('animate'); 
  });
});
