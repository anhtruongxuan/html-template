var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var gulp            = require('gulp');
var mainBowerFiles  = require('main-bower-files');
var flatten         = require('gulp-flatten');
var changed         = require('gulp-changed');
var uglify          = require('gulp-uglify');

// moveBower script 
gulp.task('moveBower', function () {
  var files = mainBowerFiles({
    base: '../bower_components',
    debugging: true,
    overrides: {
      'jquery': { main: 'dist/jquery.min.js' },
      'bootstrap': { main: 'dist/js/bootstrap.min.js'}
    }
  });


  return gulp.src(files)
    .pipe(flatten())
    .pipe(gulp.dest(cfg.scripts.build_lib));
});

// moveBower style 
gulp.task('moveBowerCss', function () {
  var filesCss = mainBowerFiles({
    base: '../bower_components',
    debugging: true,
    overrides: {
      'jquery': { main: 'Empty' },
      'bootstrap': { main: 'dist/css/bootstrap.min.css' }
    }
  });

  return gulp.src(filesCss)
  .pipe(flatten())
  .pipe(gulp.dest(cfg.styles.build_lib));
});