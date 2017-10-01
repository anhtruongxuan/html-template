var fs              = require('fs');
var cfg             = JSON.parse(fs.readFileSync('./config.json'));
var gulp            = require('gulp');
var changed         = require('gulp-changed');
var imagemin        = require('gulp-imagemin');



// minify new images
gulp.task('uploads', function(){
  var imgSrc = cfg.uploads.src,
    imgDst = cfg.uploads.build;

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin({
          progressive: true,
          svgoPlugins: [
            {removeViewBox: false},
            {cleanupIDs: false}
          ]
        }))
    .pipe(gulp.dest(imgDst));
});
