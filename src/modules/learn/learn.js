'use strict';

module.exports = angular.module('${app}.learn', [])

  .controller('LearnCtrl', require('./controllers/learn.controller'))

  .config(function learnConfig($stateProvider) {

    $stateProvider
      .state('learn', {
        url: '/learn',
        controller: 'LearnCtrl as learn',
        templateUrl: 'templates/learn.html',
        pageTitle: 'Learn'
      });

  });