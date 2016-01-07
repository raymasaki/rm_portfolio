app.controller('AppCtrl', ['$log', '$state', '$http', '$filter', '$timeout', AppCtrl]);

function AppCtrl($log, $state, $http, $filter, $timeout) {

   var self = this;

   self.closeProject = function() {

      self.currProject = null;

      // current sheet transitions off page with proper angle
      angular.element('.project').velocity({
         translateY: -($(document).height()),
      }, {
         duration: '850ms'
      });

      // state changes to home
      window.setTimeout(function() {
         $state.go('home');
         angular.element('.selected').removeClass('selected');
      }, 600);

   };

}
