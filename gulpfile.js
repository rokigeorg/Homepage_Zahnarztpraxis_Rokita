var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('style', function() {
    // place code for your default task here

    gulp.src('./scss/*')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream:true}));

});

gulp.task('serve',function () {

    browserSync.init({server:{
        baseDir:'./'
    }});

    gulp.watch('./scss/*.scss', ['style']);
    gulp.watch('*.php').on('change',browserSync.reload());
});

gulp.task('default',['style','serve']);

