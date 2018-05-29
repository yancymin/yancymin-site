// var htmlminify = require("gulp-html-minify");
// var cssminify = require("gulp-clean-css");
// var runsequence = require("run-sequence");
// var revreplace = require("gulp-rev-replace");
// var filter = require('gulp-filter');
// var useref = require('gulp-useref');
var connect = require('gulp-connect');
// var base64 = require('gulp-base64');
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    srcPath = {
        HTML: "./*.html",
        LESS: "./src/less/*.less",
        CSS: "./css/*.css",
        JS: "./src/js/*.js",
        IMG: "./src/images",
    },
    distPath = {
        ROOT: "./dist",
        CSS: "./dist/css",
        JS: "./dist/js",
        IMG: "./dist/images"
    };

gulp.task('dev', function () {
    connect.server({
        name: 'connect dev',
        root: './',
        // host: 'wl.v',
        prot: 8000,
        livereload: true //实时刷新
    })
});

gulp.task('pro', function () {
    connect.server({
        name: 'connect pro',
        root: './dist',
        prot: 8001,
        livereload: true //实时刷新
    })
});


// CSS 压缩支持自动生成前缀，这个配置可以百度，根据最终环境自定义
var CSS_AUTO_PREF = [
    'last 2 version', 'last 3 Chrome versions', 'Firefox >= 20', 'safari 5', 'ie 8', 'ie 9', 'ios >=7', 'android 4'
];


gulp.task('build', function () {
    // runsequence('clean-dist', 'minify-css', 'minify-html')
    gulp.run('minify-html');
});

gulp.task('default',['dev','auto-fx']);
// gulp.task('server', ['pro']);


const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: CSS_AUTO_PREF,
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);


 
gulp.task('default', () =>
    gulp.src('./css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
);