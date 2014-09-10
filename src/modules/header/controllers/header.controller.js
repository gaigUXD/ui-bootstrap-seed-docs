'use strict';

function HeaderCtrl() {

  var vm = this;

  (function init() {

    // Main nav links
    vm.navLinks = [
      {
        label: 'About',
        uiSref: 'about'
      },
      {
        label: 'Learn',
        uiSref: 'learn'
      },
      {
        label: 'Guidelines',
        uiSref: 'guidelines'
      },
      {
        label: 'Exercises',
        uiSref: 'exercises'
      }
    ];

  })();

}

module.exports = HeaderCtrl;