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
         controller: function($stateParams, $state){

            document.body.scrollTop = 0;

            window.setTimeout(function() {

               degArr = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5];
               var degree = degArr[Math.floor(Math.random() * 7)];
               angular.element('.container').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});

               angular.element('.container').velocity({
                  top: '10%'
               },{
                  duration: 600,
                  easing: [0.34, 0.34, 0.25, 1]
               });

               angular.element('.container').css('margin-bottom', '100vh');
            }, 300);

            var projectClass = '.' + $stateParams.projectId;
            angular.element(projectClass).addClass('selected');

            $(window).scroll(function() {
               if($(window).scrollTop() + $(window).height() == $(document).height()) {
                   $state.transitionTo('home');
               }
            });

         }
     });

    $urlRouterProvider.otherwise('/');
}
