var gulp = require('gulp');
var markdown = require('gulp-markdown');
var flatten = require('gulp-flatten');
var config = require('../config');

gulp.task('markdown', function () {
  var src = config.paths.src.root + '/**/*.md';
  var dest = config.paths.dist.templates;

  gulp.src(src)
    .pipe(flatten())
    .pipe(markdown())
    .pipe(gulp.dest(dest));
});