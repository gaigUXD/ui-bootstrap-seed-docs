'use strict';

angular

/**
 * Initialize the main module
 *
 * All child modules must be included here
 */
  .module('${app}', [
    'gaigUiBootstrap',
    'ui.router',
    require('./modules/common/common').name,
    require('./modules/header/header').name,
    require('./modules/footer/footer').name,
    require('./modules/home/home').name,
    require('./modules/about/about').name,
    require('./modules/learn/learn').name,
    require('./modules/guidelines/guidelines').name,
    require('./modules/exercises/exercises').name
  ])

/**
 * Config
 */
  .config(function appConfig($urlRouterProvider, $stateProvider) {

    /**
     * Catch undefined routes and redirect to 404
     */
    $urlRouterProvider.otherwise('/');

  });