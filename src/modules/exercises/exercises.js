'use strict';

module.exports = angular.module('${app}.exercises', [])

  .controller('ExercisesCtrl', require('./controllers/exercises.controller'))
  .controller('ViewExerciseCtrl', require('./controllers/view-exercise.controller'))

  .service('ExercisesService', require('./services/exercises.service'))

  .config(function exercisesConfig($stateProvider) {

    $stateProvider

      .state('exercises', {
        url: '/exercises',
        controller: 'ExercisesCtrl as exercises',
        templateUrl: 'templates/exercises.html',
        pageTitle: 'Exercises'
      })

      .state('viewExercise', {
        url: '/exercises/:id',
        controller: 'ViewExerciseCtrl as viewExercise',
        templateUrl: 'templates/exercises.view.html',
        pageTitle: 'Exercise'
      });

  });