// uglifyjs -c -m -o 'build.js' -- scripts/script.js

var h1Class = document.querySelector('h1').classList;
var h2Class = document.querySelector('h2').classList;
var sections = { 
  about: { inverse: 'work'}, 
  work: { inverse: 'about' }
};

Object.keys(sections).forEach(function(section) {
  sections[section].link = document.querySelector('.' + section + '-link');
  sections[section].svg = document.querySelector('.' + section + '-icon-container svg');
  sections[section].home = document.querySelector('.' + section + '-to-home');
  sections[section].content = document.querySelector('.' + section + '-content');
});

Object.keys(sections).forEach(function(section) {
  var sectionInfo = sections[section];
  var link = sectionInfo.link;
  var svg = sectionInfo.svg;
  var content = sectionInfo.content;
  var home = sectionInfo.home;
  var inverseInfo = sections[sectionInfo.inverse];

  link.addEventListener('mouseenter', function() {
    svg.classList.add('animate'); 
  });

  link.addEventListener('mouseleave', function() {
    svg.classList.remove('animate'); 
  });

  link.addEventListener('click', function() {
    h1Class.add('disappear-up'); 
    h2Class.add('disappear-down'); 
    link.classList.add('link-stay');
    svg.classList.remove('on-hover');
    
    inverseInfo.home.classList.remove('hide');
    inverseInfo.link.classList.add('inactive');

    setTimeout(function() { 
      content.classList.add('quick-fade');
      content.classList.remove('hide');
      h1Class.add('hide');
      h1Class.remove('disappear-up'); 
      h2Class.remove('disappear-down'); 
      h2Class.add('hide');
    }, 500);
  });

  home.addEventListener('click', function() { 
    h1Class.remove('hide');
    h2Class.remove('hide');

    inverseInfo.content.classList.add('hide');
    inverseInfo.link.classList.remove('link-stay');
    inverseInfo.svg.classList.add('on-hover');

    document.querySelector('.inactive').classList.remove('inactive');
    this.classList.add('hide');
  });
});
