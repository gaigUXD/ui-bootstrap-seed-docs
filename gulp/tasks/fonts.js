var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config');

gulp.task('fonts', function () {
  var src = [
      config.paths.src.root + '/**/*.eot',
      config.paths.src.root + '/**/*.svg',
      config.paths.src.root + '/**/*.ttf',
      config.paths.src.root + '/**/*.woff'
  ];
  var dest = config.paths.dist.fonts;

  return gulp.src(src)
    .pipe(flatten())
    .pipe(gulp.dest(dest));
});