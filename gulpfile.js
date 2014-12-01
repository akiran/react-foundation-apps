var gulp = require('gulp');
// var rimraf = require('gulp-rimraf');
var sass = require('gulp-ruby-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('sass', function () {
  return  gulp.src(['./demos/scss/*{scss,sass}'])
              .pipe(sass({ loadPath : ['bower_components', 'node_modules'],}))
               .on('error', function (err) { console.log(err.message); })
              .pipe(gulp.dest('./demos/css'));
});

gulp.task('server', function (callback) {
  var myConfig = require('./webpack.config.js');
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './demos',
    hot: true,
    debug: true
  }).listen(8000, 'localhost', function (err, result) {
    
  });
});