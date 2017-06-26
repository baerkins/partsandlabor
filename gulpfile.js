
var devurl  = 'pl.dev';
var entry   = 'partsandlabor.scss';

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var lint          = require('gulp-sass-lint');
var scsslint      = require('gulp-scss-lint');
var sassdoc       = require('sassdoc');
var bSync         = require('browser-sync').create();
var checkFilesize = require('gulp-check-filesize');
var args          = require('yargs').argv;
var gulpif        = require('gulp-if');
var sequence      = require('gulp-sequence');
var util          = require('gulp-util');

var production    = args.production;


gulp.task('lint', function() {
  return gulp.src(['./parts/**/*.scss', './labor/**/*.scss'])
    .pipe( lint() )
    .pipe( lint.format() )
    .pipe( gulpif( production, lint.failOnError() ) )
});

/**
 * Lint, build sass, check output size
 *
 */
gulp.task( 'build_sass', ['lint'], function () {
  gulp.src( entry )
    .pipe( sass().on( 'error', sass.logError) )
    .pipe( checkFilesize() )
    .pipe( gulp.dest( './build/css' ) );
});


/**
 * Build Documentation
 *
 */
gulp.task('build_docs', function () {
  var options = {
    dest: 'docs',
    sort: ['group>'],
    groups: {
      parts : 'Parts',
      labor : 'Labor'
    }
  }
  return gulp.src(['./parts/**/*.scss', './labor/**/*.scss'])
    .pipe( sassdoc(options) );
});


gulp.task('build', sequence( ['build_sass', 'build_docs'] ) );


gulp.task('demo_sass', function () {
  return gulp.src('demo/scss/styles.scss')
  .pipe( sass().on( 'error', sass.logError ) )
  .pipe( gulp.dest('./demo/css' ) )
  .pipe( bSync.stream() );
});




gulp.task('serve', function() {
  bSync.init( {
    server: "./demo"
  } );
  gulp.watch( '**/*.scss', ['demo_sass'] );
  gulp.watch( 'demo/*.html' ).on( 'change', bSync.reload );
});



