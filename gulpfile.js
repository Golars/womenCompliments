var gulp = require('gulp'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    eol = require('gulp-eol');

gulp.task('default', function() {
});

/*** MAIN ***/
gulp.task('main', function () {
    return gulp.src(['sass/main.sass'])
        .pipe(sass())
        .pipe(concatCss('main.css'))
        .pipe(eol('\n'))
        .pipe(gulp.dest('css/'));
});

/*** BUILD ***/
gulp.task('build', ['main'], function () {
    return gulp.src(['css/main.css'])
        .pipe(concatCss('main.min.css'))
        .pipe(cleanCSS())
        .pipe(minifyCss())
        .pipe(eol('\n'))
        .pipe(gulp.dest('css/'));
});

/*** WATCH ***/
gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['main']);
});