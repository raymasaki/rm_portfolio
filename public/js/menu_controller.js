app.controller('MenuCtrl', ['$log', MenuCtrl]);

function MenuCtrl($log) {

   var self = this;

   self.projects = [
      { title : 'Google Primer', id : 'primer', role : 'Mobile App, Website' },
      { title : 'HYPEBEAST', id : 'hypebeast', role : 'Logo' },
      { title : 'Banger Gallery', id : 'banger', role : 'Website' },
      { title : 'CS Indus.', id : 'csindus', role : 'Brand Identity, Website' },
      { title : 'Insa', id : 'insa', role : 'Restaurant Identity' },
      { title : 'Quesofrito', id : 'quesofrito', role : 'Logo, Lettering' },
      { title : 'Graphiti', id : 'graphiti', role : 'Icon Suite' },
      { title : 'Illmat', id : 'illmat', role : 'Typeface' }
   ];

   self.removeSelected = function() {
      angular.element('.selected').removeClass('selected');
   };
}
