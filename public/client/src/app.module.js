(function() {
'use strict';

angular.module('experior', ['common'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}

})();
