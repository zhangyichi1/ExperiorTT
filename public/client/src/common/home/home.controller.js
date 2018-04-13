(function() {
'use strict';

angular.module('common')
.controller('HomeController', HomeController);

function HomeController() {
  let $ctrl = this;
  $ctrl.myInterval = 3000;
  $ctrl.noWrapSlides = false;
  $ctrl.active = 0;
  $ctrl.slides = [];
  let currentIndex = 0;
  let text = '';

  $ctrl.addSlide = function() {
    switch (currentIndex) {
      case 1:
        text = 'Sid Naresh';
        break;
      case 2:
        text = 'Nandan Naresh';
        break;
      case 3:
        text = 'Maria Sirakova';
        break;
      default:
        text = 'Experior';
    }
    $ctrl.slides.push({
      image: '/assets/img/' + currentIndex + '.jpg',
      text: text,
      id: currentIndex++
    });
  };

  for (let i=0; i<4; i++) {
    console.log('currentIndex is: ' + currentIndex);
    $ctrl.addSlide();
    console.log($ctrl.slides);
    console.log('length is: ' + $ctrl.slides.length);
  }
}

})();
