'use strict';

function exercisesService() {
  var exercises = this;

  var path = 'templates';

  exercises.exercisesList = [
    {
      groupName: 'Get Started',
      exercises: [
        {
          id: '1',
          name: 'Set Up Your Dev Environment',
          url: path + '/set-up-your-dev-environment.html'
        },
        {
          id: '2',
          name: 'Download and Configure the Seed Project',
          url: path + '/download-and-configure-the-seed-project.html'
        },
        {
          id: '3',
          name: 'Install Package Dependencies and Run App',
          url: path + '/install-package-dependencies-and-run-app.html'
        }
      ]
    },
    {
      groupName: 'Some Stuff',
      exercises: [
        {
          id: '5',
          name: 'Foo3',
          url: path + '/test.html'
        },
        {
          id: '6',
          name: 'Foo4',
          url: path + '/test.html'
        }
      ]
    }
  ];

  exercises.getExerciseById = function(id) {
    var found = null;

    angular.forEach(exercises.exercisesList, function exercisesIterator(exercisesGroup) {
      angular.forEach(exercisesGroup.exercises, function(exercise) {
        if (!found) {
          if (exercise.id === id) {
            found = exercise;
          }
        }
      });
    });

    return found;
  };

  exercises.getNextExercise = function(id) {
    var nextId = parseInt(id) + 1;
    var next = exercises.getExerciseById(nextId.toString());
    return next;
  };

  exercises.getPreviousExercise = function(id) {
    var previousId = parseInt(id) - 1;
    var previous = exercises.getExerciseById(previousId.toString());
    return previous;
  };

}

module.exports = exercisesService;