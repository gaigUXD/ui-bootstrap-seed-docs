'use strict';

function ExercisesCtrl($scope, $stateParams, ExercisesService) {

  var vm = this;
  (function init() {

    vm.exercisesList = ExercisesService.exercisesList;

  })();

}

module.exports = ExercisesCtrl;