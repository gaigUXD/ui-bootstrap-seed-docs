<div class="container">
  <div class="row-fluid">
    <div class="span12">

      <div class="seed-hero">
        <h1>Build a Working App</h1>

        <p>
          Work through a series of exercises designed to introduce you to the seed project
          workflow. Upon completion, you will have a basic, fully functional client manager
          application.
        </p>
      </div>

    </div>
  </div>

  <div class="row-fluid">
    <div class="span12">

      <section ng-repeat="group in exercises.exercisesList">
        <h2>{{group.groupName}}</h2>

        <ul class="seed-tiles">
          <li class="seed-tile" ng-repeat="exercise in group.exercises">
            <a ui-sref="viewExercise({ id: exercise.id })" class="seed-tile-inner">
              {{exercise.name}}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>