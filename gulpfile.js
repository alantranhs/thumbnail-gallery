var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var plumber = require('gulp-plumber');

// Compile sass
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/tmp/css"))
        .pipe(browserSync.stream());
});

// Compile lightgallery

gulp.task('lightgallery', () => {
  return gulp.src([
      'node_modules/lightgallery/lightgallery.min.js',
        'node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.umd.js',
        'node_modules/lightgallery/plugins/zoom/lg-zoom.umd.js',
      'node_modules/lightgallery/css/lightgallery.css',
      'node_modules/lightgallery/css/lg-zoom.css',
      'node_modules/lightgallery/css/lg-thumbnail.css',
      'node_modules/lightgallery/css/lightgallery-bundle.css',
    ])
    .pipe(plumber())
    .pipe(gulp.dest("app/tmp/libs/lightgallery"))
    .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', 'lightgallery', function() {

    browserSync.init({
        server: "./app/"
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/lib/lightgallery/**", gulp.series('lightgallery'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
