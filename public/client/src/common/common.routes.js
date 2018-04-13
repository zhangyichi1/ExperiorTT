(function() {
'use strict';

angular.module('common')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  $stateProvider
    .state('common', {
      abstract: true,
      templateUrl: 'client/src/common/common/common.html',
      controller: 'CommonController',
      controllerAs: 'commonCtrl'
    })
    .state('common.home', {
      url: '/',
      templateUrl: 'client/src/common/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    });
}
})();
