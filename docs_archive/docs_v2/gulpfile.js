const gulp   = require("gulp");
const $if    = require("gulp-if");
const babel  = require("gulp-babel");
const jshint = require('gulp-jshint');
const uglify = require("gulp-uglify");
const args   = require('yargs').argv;
const sass   = require('gulp-sass');
const bsync  = require('browser-sync');

const production = args.production;


/**
 * JS Task
 *
 */
gulp.task("js", function () {
  return gulp.src("app/js/app.js")
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(babel())
    .pipe( $if( production, uglify() ) )
    .pipe(gulp.dest("public"));
});


/**
 * Sass Task
 *
 */
gulp.task( 'sass', function () {
 return gulp.src( "app/sass/main.scss" )
   .pipe( sass().on( 'error', sass.logError) )
   .pipe( gulp.dest( 'public' ) )
   .pipe( bsync.stream({match: '**/*.css'}) );;
});


/**
 * Reload Browsersync
 *
 */
 gulp.task('watch_reload', function(){ bsync.reload(); });


/**
 * Serve Task
 *
 */
gulp.task('serve', ['sass', 'js'], function(){
  bsync({
    proxy: 'pldocs.dev'
  });

  // Watch tasks
  gulp.watch(['app/sass/**/*.scss'], ['sass']);
  gulp.watch(['app/js/**/*.js'], ['js']);
  gulp.watch('**/*.html', ['watch_reload']);
});
