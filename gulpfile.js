
var gulp = require('gulp');
var package = require('./package.json');
var concat = require('gulp-concat');


gulp.task('concat-css', function() {
  return gulp.src([
      'src/css/bootstrap.min.css',
      'src/css/plugins.css',
      'src/css/main.css',
      'src/css/themes.css'
    ])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/assets/'));
});


gulp.task('default', ['concat-css']);
