app.controller('AppCtrl', ['$log', '$state', '$http', '$filter', '$timeout', 'currAngle', AppCtrl]);

function AppCtrl($log, $state, $http, $filter, $timeout, currAngle) {

   var self = this;

   self.closeProject = function() {

      self.currProject = null;

      var angle = currAngle.getProperty();

      // current sheet transitions off page with proper angle
      angular.element('.project').velocity({
         translateY: -($(document).height()),
         rotateZ: [angle, angle]
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
