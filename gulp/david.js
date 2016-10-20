var david = require('david');

var manifest = {
  "private": true,
  "engines": {
    "node": ">=4.0.0"
  },
  "devDependencies": {
    "browser-sync": "^2.8.3",
    "chalk": "^1.1.0",
    "cordova": "^6.0.0",
    "del": "^2.0.0",
    "elementtree": "^0.1.6",
    "eslint": "^3.8.1",
    "gulp": "^3.9.0",
    "gulp-angular-filesort": "^1.1.1",
    "gulp-autoprefixer": "^3.0.1",
    "gulp-changed": "^1.3.0",
    "gulp-csso": "^2.0.0",
    "gulp-eslint": "^3.0.1",
    "gulp-filter": "^4.0.0",
    "gulp-htmlmin": "^3.0.0",
    "gulp-if": "^2.0.0",
    "gulp-imagemin": "^3.0.3",
    "gulp-inject": "^4.0.0",
    "gulp-jsonlint": "^1.1.0",
    "gulp-load-plugins": "^1.0.0-rc",
    "gulp-natural-sort": "^0.1.0",
    "gulp-ng-annotate": "^2.0.0",
    "gulp-plumber": "^1.0.1",
    "gulp-protractor": "^3.0.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^2.0.2",
    "gulp-shell": "^0.5.1",
    "gulp-size": "^2.0.0",
    "gulp-sourcemaps": "^2.1.1",
    "gulp-uglify": "^2.0.0",
    "gulp-useref": "^3.0.4",
    "karma": "^1.3.0",
    "karma-angular-filesort": "^1.0.0",
    "karma-jasmine": "^1.0.2",
    "karma-ng-html2js-preprocessor": "^1.0.0",
    "karma-phantomjs-launcher": "^1.0.0",
    "lodash": "^4.3.0",
    "main-bower-files": "^2.9.0",
    "minimist": "^1.2.0",
    "phantomjs-prebuilt": "^2.1.4",
    "plist": "^2.0.1",
    "proxy-middleware": "^0.15.0",
    "require-dir": "^0.3.0",
    "vinyl-paths": "^2.0.0",
    "wiredep": "^4.0.0",
    "xml2js": "^0.4.9",
    "yeoman-test": "^1.1.0"
  }
};

david.getDependencies(manifest, function (er, deps) {
  console.log('latest dependencies information for', manifest.name);
  listDependencies(deps);
});

david.getDependencies(manifest, { dev: true }, function (er, deps) {
  console.log('latest devDependencies information for', manifest.name);
  listDependencies(deps);
});

david.getUpdatedDependencies(manifest, function (er, deps) {
  console.log('dependencies with newer versions for', manifest.name);
  listDependencies(deps);
});

david.getUpdatedDependencies(manifest, { dev: true }, function (er, deps) {
  console.log('devDependencies with newer versions for', manifest.name);
  listDependencies(deps);
});

david.getUpdatedDependencies(manifest, { stable: true }, function (er, deps) {
  console.log('dependencies with newer STABLE versions for', manifest.name);
  listDependencies(deps);
});

david.getUpdatedDependencies(manifest, { dev: true, stable: true }, function (er, deps) {
  console.log('devDependencies with newer STABLE versions for', manifest.name);
  listDependencies(deps);
});

function listDependencies(deps) {
  Object.keys(deps).forEach(function(depName) {
    var required = deps[depName].required || '*';
    var stable = deps[depName].stable || 'None';
    var latest = deps[depName].latest;
    console.log('%s Required: %s Stable: %s Latest: %s', depName, required, stable, latest);
  });
}

