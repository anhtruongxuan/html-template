var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var gulp            = require('gulp');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');
var gulpCopy        = require('gulp-copy');


// Styles Dev

gulp.task('fonts', function(){
    gulp.src(cfg.fonts.src)
        .pipe(plumber({errorHandler: notify.onError(cfg.error)}))
        .pipe(gulp.dest(cfg.fonts.build));
});