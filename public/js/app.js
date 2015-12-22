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
            }
        });

    $urlRouterProvider.otherwise('/');
}
