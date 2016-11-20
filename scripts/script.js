/* 
 * TODO: CSS lint, build process, webkit stuff
 */

var pairs = { about: 'work', work: 'about' };
var links = [];
var homeLinks = [];
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

Object.keys(pairs).forEach(function(section) {
  var set = [];
  set.push(document.querySelector('.' + section + '-link'));
  set.push(document.querySelector('.' + section + '-icon-container svg'));
  links.push(set);

  homeLinks.push(document.querySelector('.' + section + '-to-home'));
});

Object.keys(pairs).forEach(function(section) { 
  var l0 = document.querySelector('.' + pairs[section] + '-link');
  var l1 = document.querySelector('.' + pairs[section] + '-icon-container svg');
  var link = [l0, l1];

  link[0].addEventListener('mouseenter', function() {
    link[1].classList.add('animate'); 
  });

  link[0].addEventListener('mouseleave', function() {
    link[1].classList.remove('animate'); 
  });

  link[0].addEventListener('click', function() {
    var selectedSection = this.parentElement.id;
    var otherSection = '.' + pairs[selectedSection];

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
});

homeLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    var selectedSection = this.parentElement.id;
    var otherSection = pairs[selectedSection];

    content = document.querySelector('.' + pairs[this.parentElement.id] + '-content');
    content.classList.add('hide');
    h1.classList.remove('hide');
    h2.classList.remove('hide');

    document.querySelector('.' + otherSection + '-link').classList.remove('link-stay');
    document.querySelector('.' + otherSection + '-icon-container svg').classList.add('on-hover');
    document.querySelector('.inactive').classList.remove('inactive');
    this.classList.add('hide');
  });
});
