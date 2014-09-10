'use strict';

module.exports = angular.module('${app}.home', [])

  .controller('HomeCtrl', require('./controllers/home.controller'))

  .config(function homeConfig($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'templates/home.html',
        pageTitle: 'Welcome'
      });

  });