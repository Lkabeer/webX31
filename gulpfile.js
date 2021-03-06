var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
//         .pipe(gulp.dest("./js"))
//         .pipe(browserSync.stream());
// });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);