var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var assign = require('object-assign');
var runSequence = require('run-sequence');
var version = require('./package.json').version;

gulp.task('clean', function () {
  del(['./build/*']);
});

gulp.task('copy', function () {
  gulp.src('./docs/index.html')
    .pipe(gulp.dest('build'));

  gulp.src('./docs/img/*')
    .pipe(gulp.dest('build/img'));

  gulp.src('./bower_components/foundation-apps/iconic/*')
    .pipe(gulp.dest('build/img/iconic'));
});

// gulp.task('sass', function () {
//   return  gulp.src(['./docs/**/*.scss'])
//               .pipe(sass({ loadPath : ['bower_components', 'node_modules'],}))
//                .on('error', function (err) { console.log(err.message); })
//               .pipe(gulp.dest('./build'));
// });

gulp.task('sass', function () {
  return  gulp.src(['./docs/**/*.{scss,sass}'])
              .pipe(sass({ includePaths : ['bower_components', 'node_modules'], errLogToConsole: true}))
              .pipe(gulp.dest('./build'));
});

gulp.task('server', ['copy', 'sass'], function (callback) {
  var myConfig = require('./webpack.config.js');
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("dev_docs")
      }
    })
  );
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, process.env.HOST_IP || 'localhost', function (err, result) {
    
  });
});

gulp.task('watch', function () {
  gulp.watch(['./docs/**/*{scss,sass}', './scss/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html', './docs/img/*'], ['copy']);
});

gulp.task('default', ['watch', 'server'])
// gulp tasks for building dist files
gulp.task('dist-clean', function () {
  return del(['./dist/*']);
});

var distConfig = require('./webpack.config.dist.js');
gulp.task('dist-unmin', function (cb) {
  var unminConfig = assign({}, distConfig);
  unminConfig.output.filename = 'react-foundation-apps.js';
  return webpack(unminConfig, function (err, stat) {
    cb();
  });
});


gulp.task('dist-min', function (cb) {
  var minConfig = assign({}, distConfig);
  minConfig.output.filename = 'react-foundation-apps.min.js';
  minConfig.plugins = minConfig.plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
  return webpack(minConfig, function (err, stat) {
    cb();
  });
});

gulp.task('dist', runSequence('dist-clean', 'dist-unmin', 'dist-min'));
