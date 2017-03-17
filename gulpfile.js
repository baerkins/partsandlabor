var gulp = require('gulp');
var sass = require('gulp-sass');
var lint = require('gulp-sass-lint');
var sassdoc = require('sassdoc');

var entry = 'partsandlabor.scss';

gulp.task('sass', function () {
  return gulp.src(entry)
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sassdoc', function () {
  return gulp.src(['partsandlabor.scss', './labor/**/*.scss'])
    .pipe(sassdoc());
});
