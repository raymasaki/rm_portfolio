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
            translateY: -($(document).height()),
         }, {
            duration: '850ms'
         });

         // open the clicked project
         window.setTimeout(function() {
            $state.go('workDetail', {
               projectId: id
            });
         }, 600);
      }
   };

}
