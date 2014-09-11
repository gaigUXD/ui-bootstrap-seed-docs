<div class="container">
  <div class="row-fluid">
    <div class="span12">
      <div class="markdown" ng-include="viewExercise.exercise.url"></div>
    </div>
  </div>

  <div class="row-fluid progression-btns">
    <div class="span6">
      <a class="btn-progression"
         ui-sref="viewExercise({ id: viewExercise.previousExercise.id })"
         ng-hide="viewExercise.previousExercise === null">
        <span class="gaig-icon gaig-icon-arrow-left"></span>
        Previous
      </a>
    </div>

    <div class="span6">
      <a class="btn-progression"
         ui-sref="viewExercise({ id: viewExercise.nextExercise.id })"
         ng-hide="viewExercise.nextExercise === null">
        Next
        <span class="gaig-icon gaig-icon-arrow-right"></span>
      </a>

      <a class="btn-progression btn-success"
         ui-sref="exercises"
         ng-show="viewExercise.nextExercise === null">
        <span class="gaig-icon gaig-icon-ok"></span>
        Section Complete
      </a>
    </div>
  </div>
</div>