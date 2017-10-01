var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var gulp            = require('gulp');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var sourcemaps      = require('gulp-sourcemaps');



// JS Dev Task
gulp.task('plugins', function(){
  gulp.src(cfg.plugins.src)
    .pipe(plumber({errorHandler: notify.onError(cfg.error)}))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(cfg.plugins.build));
});

// JS Build Task
gulp.task('plugins-build', function(){
  gulp.src(cfg.plugins.src)
    .pipe(plumber({errorHandler: notify.onError(cfg.error)}))
    .pipe(concat('plugins.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(cfg.plugins.build));
});
