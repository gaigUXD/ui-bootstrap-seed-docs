'use strict';

module.exports = function GlobalCtrl($scope, $rootScope, $templateCache, $state, settings) {

  // Store reference to `this` as view model (vm)
  // All members of the vm object are available to the view.
  var vm = this;

  /* ===============================================================================================
   Init (defined as an IIFE - immediately invoked function expression)
   ============================================================================================== */
  (function init() {
    vm.model = {
      pageTitle: settings.loadingString
    };

    vm.flags = {
      isLoading: true
    };

    $rootScope.$on('$stateChangeStart', handleRouteChangeStart);
    $rootScope.$on('$stateChangeSuccess', handleRouteChangeSuccess);
  })();

  /* ===============================================================================================
   Member functions (available to the view)
   ============================================================================================== */


  /* ===============================================================================================
   Private functions (not exposed to the view)
   ============================================================================================== */
  function handleRouteChangeStart() {
    // Remove all cached templates to prevent the browser from hanging and not displaying the
    // loading screen
    $templateCache.removeAll();

    vm.flags.isLoading = true;
    vm.model.pageTitle = settings.loadingString;
  }

  function handleRouteChangeSuccess() {
    vm.model.pageTitle = $state.$current.pageTitle;
    vm.flags.isLoading = false;
  }
};