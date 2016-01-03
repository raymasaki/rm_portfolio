var app = angular.module('rmApp', ['ui.router'])
    .config(MainRouter);

app.service('currAngle', function() {
    var angle = 0;

    return {
        getProperty: function() {
            return angle;
        },
        setProperty: function(value) {
            angle = value;
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
            controller: function($stateParams, $state, currAngle) {

                document.body.scrollTop = 0;

                angular.element('.selected').removeClass('selected');

                var projectClass = '.' + $stateParams.projectId;
                angular.element(projectClass).addClass('selected');

                window.setTimeout(function() {

                   angular.element('.container').addClass('visible');

                    degArr = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5];
                    var degree = degArr[Math.floor(Math.random() * 7)];

                    currAngle.setProperty(degree);

                    angular.element('.container').css({
                        WebkitTransform: 'rotate(' + degree + 'deg)'
                    });

                    angular.element('.container').velocity({
                        top: '10%',
                    }, {
                        duration: 600,
                        easing: [0.37, 0.35, 0.12, 1]
                    });

                }, 300);

                $(window).scroll(function() {
                    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                        $state.go('home');
                        angular.element('.selected').removeClass('selected');
                    }
                });

            }
        });

    $urlRouterProvider.otherwise('/');
}
