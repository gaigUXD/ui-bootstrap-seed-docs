'use strict';

function ViewExerciseCtrl($stateParams, ExercisesService) {

  var vm = this;

  (function init() {
    vm.exercise = ExercisesService.getExerciseById($stateParams.id);
  })();

}

module.exports = ViewExerciseCtrl;