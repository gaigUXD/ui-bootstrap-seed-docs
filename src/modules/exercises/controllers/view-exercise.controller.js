'use strict';

function ViewExerciseCtrl($stateParams, ExercisesService) {

  var vm = this;

  (function init() {
    vm.exercise = ExercisesService.getExerciseById($stateParams.id);

    vm.nextExercise = ExercisesService.getNextExercise($stateParams.id);
    vm.previousExercise = ExercisesService.getPreviousExercise($stateParams.id);
  })();

}

module.exports = ViewExerciseCtrl;