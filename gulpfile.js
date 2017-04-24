
var devurl  = 'pl.dev';
var entry   = 'partsandlabor.scss';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var lint    = require('gulp-sass-lint');
var sassdoc = require('sassdoc');
var bSync   = require('browser-sync').create();


gulp.task( 'sass', function () {
  return gulp.src( entry )
    .pipe( lint() )
    .pipe( lint.format() )
    .pipe( lint.failOnError() )
    .pipe( sass().on( 'error', sass.logError) )
    .pipe( gulp.dest( './build/css' ) );
});

gulp.task('build_docs', function () {
  var options = {
    dest: 'docs',
    groups: {
      parts : 'Parts',
      labor : 'Labor'
    },
    theme: 'partsandlabor'
  }
  return gulp.src(['./parts/**/*.scss', './labor/**/*.scss'])
    // .pipe( lint() )
    // .pipe( lint.format() )
    // .pipe( lint.failOnError() )
    .pipe( sassdoc(options) );
});

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
