var componentName = 'HereIsYourComponentName';

var gulp = require("gulp");
var zip = require("gulp-zip");
var browserify = require("browserify");
var debowerify = require('debowerify');
var source = require("vinyl-source-stream");
var through2 = require("through2");
var jsforce = require("jsforce");

var forceDeploy = function(username, password) {
  return through2.obj(function(file, enc, callback) {
    var conn;
    conn = new jsforce.Connection();
    return conn.login(username, password).then(function() {
      return conn.metadata.deploy(file.contents).complete({
        details: true
      });
    })
    .then(function(res) {
      if (res.details !== null && !res.success){
        console.error(res);
        return callback(new Error('Deploy failed.'));
      }
      return callback();
    }, function(err) {
      console.error(err);
      return callback(err);
    });
  });
};

gulp.task("build", function() {
  return browserify({
    entries: ["./src/scripts/"+ componentName +".js"],
    standalone: componentName
  }).transform(debowerify)
  .bundle().pipe(source(componentName + ".resource")).pipe(gulp.dest("pkg/staticresources/"));
});

gulp.task("deploy", function() {
  return gulp.src("pkg/**/*", {
    base: "."
  }).pipe(zip('pkg.zip')).pipe(forceDeploy(process.env.SF_USERNAME, process.env.SF_PASSWORD));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*", ["build"]);
  gulp.watch("pkg/**/*", ["deploy"]);
});

gulp.task("default", ["build", "deploy"]);
