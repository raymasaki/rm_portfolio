app.controller('MenuCtrl', ['$log', '$state', 'currAngle', MenuCtrl]);

function MenuCtrl($log, $state, currAngle) {

   var self = this;
   self.currProject = null;

   self.projects = [
      { title : 'Google Primer', id : 'primer', role : 'Mobile App, Website' },
      { title : 'Banger Gallery', id : 'banger', role : 'Website' },
      { title : 'HYPEBEAST', id : 'hypebeast', role : 'Logo' },
      { title : 'CS Industries', id : 'csindus', role : 'Brand Identity, Website' },
      { title : 'Insa Brooklyn', id : 'insa', role : 'Restaurant Identity' },
      { title : 'Quesofrito', id : 'quesofrito', role : 'Logo, Lettering' },
      // { title : 'MONEYSHOWER.BIZ', id : 'moneyshower', role : 'Website' },
      { title : 'Graphiti', id : 'graphiti', role : 'Icon Suite' }
      // { title : 'Illmat', id : 'illmat', role : 'Typeface' }
   ];

   self.showProject = function(id) {
      self.currProject = id;

      // gets the current angle of the sheet
      var angle = currAngle.getProperty();

      // if a current project exists
      if (self.currProject !== null) {

         // current sheet transitions off page with proper angle
         angular.element('.project').velocity({
            translateY: -($(document).height()),
            rotateZ: [angle, angle]
         },{
            duration: '850ms'
         });

         // open the clicked project
         window.setTimeout(function() {
            $state.go('workDetail', { projectId: id });
         }, 600);
      }
   };

   self.explosion = function() {
      self.currProject = null;

      var angle = currAngle.getProperty();

      // current sheet transitions off page with proper angle
      angular.element('.project').velocity({
         translateY: -($(document).height()),
         rotateZ: [angle, angle]
      },{
         duration: '850ms'
      });

      // state changes to home
      window.setTimeout(function() {
         $state.go('home');
         angular.element('.selected').removeClass('selected');
      }, 600);

   };
}
