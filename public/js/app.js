var app = angular.module('rmApp', ['ui.router'])
    .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
        })
        .state('workDetail', {
            url: '/work/:projectId',
            templateUrl: function($stateParams) {
                return '/work/' + $stateParams.projectId + '.html';
            },
            controller: function($stateParams){
               window.setTimeout(function() {
                  var projectClass = '.' + $stateParams.projectId;
                  angular.element(projectClass).addClass('selected');
               }, 300);
            }
        });

    $urlRouterProvider.otherwise('/');
}
