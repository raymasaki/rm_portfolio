app.controller('MenuCtrl', ['$log', '$state', 'Portfolio', 'hasTransition', MenuCtrl]);

function MenuCtrl($log, $state, Portfolio, hasTransition) {

   var self = this;
   self.currProject = null;
   self.projects = Portfolio.projectList;

   self.showProject = function(id) {
      self.currProject = id;

      hasTransition.setProperty(true);

      // if a current project exists
      if (self.currProject !== null) {

         // current sheet transitions off page with proper angle
         angular.element('.project').velocity({
            translateX: ($(document).width() + ($(document).width()/8)),
            opacity: 1
         }, {
            duration: '750ms',
            easing: [0.37, 0.35, 0.12, 1]
         });

         // open the clicked project
         window.setTimeout(function() {
            $state.go('workDetail', {
               projectId: id
            });
         }, 275);
      }
   };

}
