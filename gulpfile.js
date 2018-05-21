const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./public/css/index.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({
      browsers: ['last 99 versions'],
      cascade: false
    }))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./public/dist'))
});
