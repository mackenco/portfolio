var work = document.querySelector('#work');
var workIcon = document.querySelector("#work-icon-container svg");

work.addEventListener("mouseenter", function() {
  workIcon.classList.add('animate');
});

work.addEventListener("mouseleave", function() {
  workIcon.classList.remove('animate');
});
