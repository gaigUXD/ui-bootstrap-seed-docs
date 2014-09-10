<div class="container" ng-controller="HeaderCtrl as header">
  <div class="row-fluid">
    <div class="span12">
      <a ui-sref="home" title="Return to homepage" class="logo">
        <img src="images/ux-logo.png" alt="UX Logo">
      </a>

      <nav>
        <ul>
          <li ng-repeat="navLink in header.navLinks">
            <a ui-sref="{{navLink.uiSref}}" ui-sref-active="active" title="{{navLink.label}}">
              {{navLink.label}}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>