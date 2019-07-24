var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    compress = require('gulp-imagemin'),
    zip = require('gulp-zip'),
    notify = require('gulp-notify');



//Html Tasks
gulp.task('html', function () {
   
    return gulp.src('project/index.pug')
        .pipe(pug())
        .pipe(notify('Html Done'))
        .pipe(gulp.dest('dist'))
    
    
});

//Css Tasks
gulp.task('css', function () {
   
    return gulp.src('project/css/**.*')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 2 versions'))
        .pipe(notify('Css Done'))
        .pipe(gulp.dest('dist/css'))
    
});

//Js Tasks
gulp.task('js', function () {
    return gulp.src('project/js/*.js')
        .pipe(gulp.dest('dist/js'))
    
});

//Images Tasks
gulp.task('img', function () {
   
    return gulp.src('project/images/**/*.*')
        .pipe(compress())
        .pipe(gulp.dest('dist/images'))
    
});

//File Transfer
gulp.task('file', function () {
   
    return gulp.src('project/webfonts/*')
        .pipe(gulp.dest('dist/webfonts'))
    
});

//Compress Project
gulp.task('zipFile', function () {
    return gulp.src('dist/**.*')
        .pipe(zip('portfolio.zip'))
        .pipe(gulp.dest('.'))
        .pipe(notify('Files Are Compressed(zip)'))
    
});

//Watch Tasks
gulp.task('watch', function () {
    require('./server.js')
    gulp.watch('project/index.pug', ['html'])
    gulp.watch('project/css/**/*.scss', ['css'])
    gulp.watch('project/js/*.js', ['js'])
    gulp.watch('project/images/**/*.*', ['img'])
    gulp.watch('project/webfonts/*', ['file'])
    gulp.watch('dist/**.*', ['zipFile'])
    
});

// Default Tasks
gulp.task('default', ['watch'])