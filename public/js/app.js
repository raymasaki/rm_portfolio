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
               angular.element('.container').velocity({
                  top: '56px'
               },{
                  duration: 600,
                  easing: [0.34, 0.34, 0.25, 1]
               });

               // $("html, body").animate({ scrollTop: 0 }, "fast");
               // document.body.scrollTop = 0;
               window.setTimeout(function() {
                  var projectClass = '.' + $stateParams.projectId;
                  angular.element(projectClass).addClass('selected');
               }, 250);

               angular.element('.selected').velocity({
                  translateY: '88px'
               },{
                  duration: 400,
                  easing: [0.34, 0.34, 0.25, 1]
               });
            }
        });

    $urlRouterProvider.otherwise('/');
}
