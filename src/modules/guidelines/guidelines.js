'use strict';

module.exports = angular.module('${app}.guidelines', [])

  .controller('GuidelinesCtrl', require('./controllers/guidelines.controller'))

  .config(function guidelinesConfig($stateProvider) {

    $stateProvider
      .state('guidelines', {
        url: '/guidelines',
        controller: 'GuidelinesCtrl as guidelines',
        templateUrl: 'templates/guidelines.html',
        pageTitle: 'Guidelines'
      });

  });