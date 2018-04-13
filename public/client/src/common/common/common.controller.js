(function() {
'use strict';

angular.module('common')
.controller('CommonController', CommonController);

function CommonController() {
  let $ctrl = this;
  $ctrl.isNavCollapsed = true;
  $ctrl.isDropdownOpen = false;
}

})();
