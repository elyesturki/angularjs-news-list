var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var connect = require("gulp-connect");
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var source = require("vinyl-source-stream");
var stripCssComments = require('gulp-strip-css-comments');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var config = {
    src: './app',
    cssFiles: {
        source: 'app/**/*.css',
        dest: 'app/',
        concatName: 'app.min.css'
    },
    jsFiles: {
        source: 'app/**/*.js',
        dest: 'app/',
        concatName: 'app.js'
    },
    imgFiles: {
        source: 'app/**/*.{gif,jpg,png,svg}',
        dest: 'app/',
    },
    htmlFiles: {
        source: 'app/**/*.html',
        dest: 'app/',
    },
    fontsFiles: {
        source: 'app/fonts/**/*.*',
        dest: 'app/fonts',
    }
};

function errorLog (error) {
 console.error.bind(error);
 this.emit('end');
}

//gulp default test
gulp.task('default', defaultTask);

function defaultTask(done) {
    console.log("default fonctionne bien !!!");
    done();
}

// task js compression
gulp.task('js', function() {
    return gulp.src(config.jsFiles.source)
        .pipe(browserSync.stream())
        .on('finish', function() {
            console.log("compress jsFiles files OK !!!");
        });
});

// task css compression
gulp.task('css', function() {
    return gulp.src(config.cssFiles.source)
        .pipe(browserSync.stream())
        .on('finish', function() {
            console.log("compress cssFiles files OK !!!");
        });
});

gulp.task('browser-sync', function() {
    browserSync.init({
       // open: false,
        injectChanges: true,
        //proxy: 'http://gulpwebsite.dev',
        server: {
            baseDir: config.src
        }
    })
});

//task compress html
gulp.task("html", function(event) {
    return gulp.src(config.htmlFiles.source)
    .pipe(htmlmin({ collapseWhitespace: true }))
});

gulp.task('clean', function () {
    return gulp.src('app/**/*.js', {read: false})
      .pipe(clean({ force: true }))
  });

//gulp task app
gulp.task('build', ['css', 'js', 'html']);

gulp.task('watch', function(callback) {
    runSequence('build', 'browser-sync',callback);
    gulp.watch(config.jsFiles.source, ['js',reload]);
    gulp.watch(config.cssFiles.source, ['css',reload]);
    gulp.watch(config.htmlFiles.source, ['html',reload]);
});