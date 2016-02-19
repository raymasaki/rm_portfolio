app.controller('AppCtrl', ['$log', '$state', '$http', '$filter', '$timeout', AppCtrl]);

function AppCtrl($log, $state, $http, $filter, $timeout) {

   var self = this;

   self.closeProject = function() {

      self.currProject = null;

      // current sheet transitions off page with proper angle
      angular.element('.project').velocity({
         translateX: ($(document).width() + ($(document).width()/8)),
         opacity: 1
      }, {
         duration: '800ms',
         easing: [0.37, 0.35, 0.12, 1]
      });

      // state changes to home
      window.setTimeout(function() {
         $state.go('home');
         angular.element('.selected').removeClass('selected');
      }, 600);

   };

}
