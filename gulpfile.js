var gulp = require('gulp'),
   livereload = require('gulp-livereload'),// auto-reload browser when files are changed 
   wiredep = require('wiredep').stream,
   gutil = require('gulp-util'),
   connect = require('gulp-connect'),      // run a local dev server
   inject = require('gulp-inject'),        // inject app dependency includes on index.html
   open = require('gulp-open');            // open a URL in the browser
   sass = require('gulp-sass');

var jsSources = ['app/js/*.js'],
   cssSources = ['app/**/*.css'],
   htmlSources = ['**/*.html'];

var paths = ['./bower_components/','./app/js/*.js','./app/style/*.css'];

gulp.task('styles', function(){
  gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/style/'));
});

gulp.task('connect', function() {
   connect.server({
       root: '.',
       livereload: true
   })
});

gulp.task('app', function(){
   var options = {
       uri: 'http://localhost:8080'
   };
   gulp.src('./index.html')
       .pipe(open(options));
});

gulp.task('hello', function () {
 console.log("Hello, world!");
});



gulp.task('serve', ['connect', 'compile', 'watch', 'injectables', 'app']);

// Watch
gulp.task('compile',function(){
  gulp.watch('app/sass/**/*.scss',['styles']);
});

gulp.task('watch', function() {
   gulp.watch(jsSources, ['js']);
   gulp.watch(cssSources, ['css']);
   gulp.watch(htmlSources, ['html']);
});

gulp.task('injectables', function() {
   var sources = gulp.src(paths, {read: false});
   return gulp.src('index.html')
       .pipe(wiredep())
       .pipe(inject(sources))
       .pipe(gulp.dest('.'));
});

gulp.task('js', function() {
   gulp.src(jsSources)
       .pipe(connect.reload())
});

gulp.task('html', function() {
   gulp.src(htmlSources)
       .pipe(connect.reload())
});

gulp.task('css', function() {
   gulp.src(cssSources)
       .pipe(connect.reload())
});

gulp.task('default', ['hello']);
