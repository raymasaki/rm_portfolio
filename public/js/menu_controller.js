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
      { title : 'Graphiti', id : 'graphiti', role : 'Icon Suite' }
      // { title : 'Illmat', id : 'illmat', role : 'Typeface' }
   ];

   self.showProject = function(id) {
      self.currProject = id;

      var angle = currAngle.getProperty();

      if (self.currProject !== null) {
         angular.element('.container').velocity({
            translateY: -($(document).height()),
            rotateZ: [angle, angle]
         },{
            duration: '800ms'
         });

         window.setTimeout(function() {
            $state.go('workDetail', { projectId: id });
         }, 600);
      }
   };
}
