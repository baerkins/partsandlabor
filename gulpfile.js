
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
var _             = require('lodash');

var production    = args.production;


/**
 * Lint sass
 *
 */
gulp.task('lint', function() {
  return gulp.src('./lib/**/*.scss')
    .pipe( lint() )
    .pipe( lint.format() )
    // .pipe( gulpif( production, lint.failOnError() ) )
});


/**
 * Build library sass
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
    groups: {
      parts : 'Parts',
      labor : 'Labor'
    },
    theme: 'partsandlabor',
    title: 'Parts and Labor',
    version: '1.1.0',
    verbose: false
  }
  return gulp.src('./lib/**/*.scss')
    .pipe( sassdoc(options) );
});


/**
 * Determine if an array of objects contains a key with a specific value.
 * @param {string}  prop Property name to find
 * @param {various} val  Value to check against
 * @param {array}   arr  Array to search through
 * @return {boolean}     True or false
 *
 */
function PropValInArrayObj( prop, val, arr ) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i][prop] == val ) {
      return true;
    }
  }
  return false;
}

/**
 * Return the index of an array object if the object contains a key with a specific value.
 * @param {string}  prop Property name to find
 * @param {various} val  Value to check against
 * @param {array}   arr  Array to search through
 * @return {int}         Index value or -1 if false
 *
 */
function getCurObjIndex(prop, name, arr) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i][prop] == name ) {
      return i;
    }
  }
  return -1;
}

/**
 * Build Custom Docs JSON
 *
 */
gulp.task('build_docs_json_raw', function () {
  var options = {
    verbose: false
  }

  return sassdoc.parse('./lib/**/*.scss', { options })
    .then(function (data) {

      var pkg = require('./package.json');

      var docs = {
        ver: pkg.version,
        sorted: [],
        groups: [],
        types: [],
        items: []
      };

      var d = data;

      /**
       * Reformat the SASSDOC JSON structure
       *
       */

      // Loop through each item
      for (var i in data ) {

        var docItem = data[i];            // Sassdoc Entry
        var group = docItem.group[0];     // Sassdoc Group (Parts, Labor, etc)
        var type = docItem.context.type;  // Sassdoc Type (function, mixin, variable, etc)

        // Make a list of the groups
        if ( !docs.groups.includes(group)) {
          docs.groups.push(group);
        }

        // Make a list of the types
        if ( !docs.types.includes(type)) {
          docs.types.push(type);
        }

        // Make a list of the items
        // docs.items.push(docItem);

        /**
         * SORT ITEMS:
         * - GROUP_NAME
         * - GROUP_TYPE
         * --- TYPE_NAME
         * --- ITEMS
         * ----- ITEM
         *
         */

        // Check to see if a matching "Group Name" exists within a "Group" object within the docs.sorted object.
        // Add one if not.
        if ( !PropValInArrayObj( 'groupName', group, docs.sorted ) ) {
          var newGroup = {
            groupName: group,
            groupTypes: []
          };
          docs.sorted.push(newGroup);
        }

        // Get and store the index of the current items "Group" object
        var currentGroupIndex = getCurObjIndex('groupName', group, docs.sorted);

        // Check to see if a matching "Type Name" exists within the current "Group" object in the docs.sorted object.
        // Add one if not.
        // If the current item "Group" index exists, then check to see if that "Group"
        if ( currentGroupIndex >= 0 && !PropValInArrayObj( 'typeName', type, docs.sorted[currentGroupIndex].groupTypes ) ) {
          var newType = {
            typeName: type,
            items: []
          }
          docs.sorted[currentGroupIndex].groupTypes.push(newType);
        }

        // Get and store the index of the current items "Type" object within it's parent "Group" object
        var currentTypeIndex = getCurObjIndex('typeName', type, docs.sorted[currentGroupIndex].groupTypes);

        // Push the item object into the proper current items "Type" object within it's parent "Group" object within `docs.sorted`
        docs.sorted[currentGroupIndex].groupTypes[currentTypeIndex].items.push(docItem);

      }

      docs.sorted.reverse();

      // Write raw json
      require('fs').writeFileSync('docs_react/src/json/raw.json', JSON.stringify(docs, null, '\t'));

    });
});


/**
 * Full build to ship
 *
 */
gulp.task('build', sequence( ['build_sass', 'build_docs_json_raw'] ) );


/**
 * Build out demo sass
 *
 */
gulp.task('demo_sass', function () {
  return gulp.src('demo/scss/styles.scss')
  .pipe( sass().on( 'error', sass.logError ) )
  .pipe( gulp.dest('./demo/css' ) )
  .pipe( bSync.stream() );
});


/**
 * Local server for demo build
 *
 */
gulp.task('serve', function() {
  bSync.init( {
    server: "./demo",
    port: 3003
  } );
  gulp.watch( '**/*.scss', ['demo_sass', 'build_sass'] );
  gulp.watch( 'demo/*.html' ).on( 'change', bSync.reload );
});



