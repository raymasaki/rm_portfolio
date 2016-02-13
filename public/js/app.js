var app = angular.module('rmApp', ['ui.router'])
   .config(MainRouter);

app.factory('Portfolio', function() {
   return {
      projectList : [{
            title: 'Google Primer',
            id: 'primer',
            role: 'Mobile App, Website'
         }, {
            title: 'Banger Gallery',
            id: 'banger',
            role: 'Website'
         }, {
            title: 'HYPEBEAST',
            id: 'hypebeast',
            role: 'Logo'
         }, {
            title: 'CS Industries',
            id: 'csindus',
            role: 'Brand Identity, Website'
         }, {
            title: 'Insa Brooklyn',
            id: 'insa',
            role: 'Restaurant Identity'
         }, {
            title: 'Quesofrito',
            id: 'quesofrito',
            role: 'Logo, Lettering'
         }, {
            title: 'Graphiti',
            id: 'graphiti',
            role: 'Icon Suite'
         }
      ]
   };

});

app.directive('imgFadeInOnload', function() {
   return {
      restrict: 'A',
      link: function postLink(scope, element, attr) {

         // once the image is loaded add the class 'loaded'
         element.bind("load", function() {
            element.addClass('loaded');
         });
         element.attr('src', attr.imgFadeInOnload);
      }
   };
});

app.directive('rmPreloader', function() {
   return {
      restrict: 'E',
      templateUrl: 'preloader.html'
   };
});

app.service('hasTransition', function() {
   var transition = true;

   return {
      getProperty: function() {
         return transition;
      },
      setProperty: function(value) {
         transition = value;
      }
   };
});



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
         controller: function($stateParams, $state, Portfolio, hasTransition) {

            // console.log(hasTransition.getProperty());

            // resets the scrollTop every project
            document.body.scrollTop = 0;
            // angular.element('body, html').scrollTop = 0;

            angular.element('body').addClass('no-scroll');

            angular.element('.selected').removeClass('selected');

            // finds the current project and gives it selected class
            var projectClass = '.' + $stateParams.projectId;
            angular.element(projectClass).addClass('selected');

            // if (hasTransition.getProperty() === true) {
               window.setTimeout(function() {

                  // sheet transitions in
                  angular.element('.project').velocity({
                     opacity: 1,
                     translateY: ['10vh', '110vh']
                  }, {
                     duration: 600,
                     easing: [0.37, 0.35, 0.12, 1]
                  });

               }, 800);

               window.setTimeout(function() {
                  angular.element('body').removeClass('no-scroll');
               }, 1000);
            // }

            var portfolioArr = Portfolio.projectList;
            var currIndex = 0;

            for (var i = 0; i < portfolioArr.length; i++) {
               if (portfolioArr[i].id === $stateParams.projectId) {
                  currIndex = i;
               }
            }

            // if user scrolls past the document height remove selected state
            $(window).scroll(function() {

               hasTransition.setProperty(false);

               // auto-advance only works for Chrome and Safari
               if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent) || /Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {

                  if ($(window).scrollTop() + $(window).height() == $(document).height()) {

                     angular.element('.project').css('opacity', 0);

                     window.setTimeout(function() {
                        if ((currIndex + 1) === portfolioArr.length) {
                           angular.element('body').addClass('no-scroll');

                           $state.go('workDetail', {
                              projectId: portfolioArr[0].id
                           });
                        } else {
                           angular.element('body').addClass('no-scroll');

                           $state.go('workDetail', {
                              projectId: portfolioArr[currIndex + 1].id
                           });
                        }
                     }, 100);


                     angular.element('.selected').removeClass('selected');
                  }

               }
            });

         }
      });

   $urlRouterProvider.otherwise('/');
}


app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
   $rootScope
   .$on('$stateChangeSuccess',
      function(event) {

         if (!$window.ga)
            return;

         $window.ga('send', 'pageview', {
            page: $location.path()
         });
      });
}]);
