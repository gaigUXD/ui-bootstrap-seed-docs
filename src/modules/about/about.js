'use strict';

module.exports = angular.module('${app}.about', [])

  .controller('AboutCtrl', require('./controllers/about.controller'))

  .config(function aboutConfig($stateProvider) {

    $stateProvider
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: 'templates/about.html',
        pageTitle: 'About'
      });

  });