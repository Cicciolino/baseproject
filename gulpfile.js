var gulp = require('gulp');
var concat = require('gulp-concat');

function bundlejs() {    
    return gulp.src([
            'assets/js/vendor/*.js', 
            'assets/js/main.js'
        ]).pipe(
            concat('bundle.js')
        ).pipe(
            gulp.dest('public/build/js')
        );
}

function bundlecss() {    
    return gulp.src([
            'assets/css/vendor/*.css',
            'assets/css/output.css', 
        ]).pipe(
            concat('stylesheet.css')
        ).pipe(
            gulp.dest('public/build/css')
        );
}


gulp.task('watch' ,function () {
    gulp.watch(['./assets/css/output.css', './assets/js/main.js'], gulp.series(bundlejs, bundlecss));
});

gulp.task('default', gulp.series(bundlejs, bundlecss));

