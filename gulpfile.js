var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');

// for react components
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// for concat files js
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// for master pages
var hbsmaster = require('gulp-handlebars-master');
var rename = require('gulp-rename');

gulp.task('handlebars', function() {

    var templatedata = {
	  "index" : {
	    "title" : "Home Page"
	  },
    "shopping-items" : {
	    "title" : "Shopping Cart Items"
	  },
    "check-out-multi" : {
      "title" : "Check Out"
    },
    "checkout_ksk" : {
      "title" : "Check Out"
    },
    "order-confirmation" : {
      "title" : "Order Confirmation"
    },
    };

    gulp.src('./pages/sections/*.hbs')
	  .pipe( hbsmaster('./pages/master.hbs', templatedata, {}))
	  .pipe( rename( function(path){
	    path.extname = '.html';
	  }))
	  .pipe(gulp.dest('./app'));
});


gulp.task('sass', function() {
  gulp.src('scss/materialize.scss')
    .pipe(autoprefixer()
    )
    .pipe(sass({
      includePaths: ['scss']
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
    gulp.src('scss/app.scss')
      .pipe(autoprefixer()
      )
      .pipe(sass({
        includePaths: ['scss']
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('css'));

      gulp.src(['css/facebook.css','css/materialize.css','css/owl.carousel.css','css/owl.theme.css','css/app.css'])
        .pipe(concatCss("app.css"))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('app/css/'));
});


gulp.task('js',function(){
  gulp.src(['./js/bin/materialize.js','./js/app.js','./js/owl-carousel/owl.carousel.js'])
  //gulp.src('./js/app.js')
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./app/js/'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass','react','js','handlebars'], function() {
  browserSync.init(["app/css/*.css", "app/js/*.js", "app/*.html"], {
    server: {
      baseDir: 'app'
    }
  });

});


gulp.task('react', function() {
    var bundler = browserify({
        entries: ['components/head-plantilla-royal.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
  return bundler
  .bundle()
  .pipe(source('head-plantilla-royal.js'))
  .pipe(gulp.dest('app/js'))
})



gulp.task('watch', ['sass','serve'], function() {
  gulp.watch(["scss/*.scss"], ['sass']);
  gulp.watch(["js/*.js"], ['js']);
  gulp.watch(["components/*.jsx"], ['react']);
  gulp.watch(["pages/*.hbs"], ['handlebars']);
  gulp.watch(["pages/sections/*.hbs"], ['handlebars']);
});
