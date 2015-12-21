var app = angular.module('rmApp', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '_home.html'
    });

  $urlRouterProvider.otherwise('/');
}
