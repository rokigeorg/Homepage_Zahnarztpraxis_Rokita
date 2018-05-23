var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('style', function () {
    // place code for your default task here

    gulp.src('./scss/*.scss', ['scss'])
        .pipe(sass())
        .pipe(gulp.dest('./production/css'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: './production/'
        }
    });

    gulp.watch('./scss/*.scss', ['style']);
    gulp.watch('production/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['style', 'serve']);

