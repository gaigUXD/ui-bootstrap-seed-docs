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
          name: 'Set up your dev environment',
          url: path + '/set-up-your-dev-environment.html'
        },
        {
          id: '2',
          name: 'Download the seed project',
          url: path + '/test.html'
        },
        {
          id: '3',
          name: 'Install seed project dependencies',
          url: path + '/test.html'
        },
        {
          id: '4',
          name: 'Review app structure',
          url: path + '/test.html'
        },
        {
          id: '5',
          name: 'Preview the app in your browser',
          url: path + '/test.html'
        }
      ]
    },
    {
      groupName: 'Some Stuff',
      exercises: [
        {
          id: '6',
          name: 'Foo3',
          url: path + '/test.html'
        },
        {
          id: '7',
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
  }

}

module.exports = exercisesService;