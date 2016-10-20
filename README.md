#**Code for Giessen - RefugeeApp**
[![Build Status](https://travis-ci.org/CodeForGiessen/refugeeApp.svg?branch=master)](https://travis-ci.org/CodeForGiessen/refugeeApp)
[![Dependencies](https://david-dm.org/CodeForGiessen/refugeeApp.svg)]
[![Coverage Status](https://coveralls.io/repos/github/CodeForGiessen/refugeeApp/badge.svg?branch=master)](https://coveralls.io/github/CodeForGiessen/refugeeApp?branch=master)
[![Inline docs](http://inch-ci.org/github/CodeForGiessen/refugeeApp.svg?branch=master)](http://inch-ci.org/github/CodeForGiessen/refugeeApp)

#Introduction
This project is a frontend application that works with the corresponding ![backend](https://github.com/CodeForGiessen/refugeeService).

This project was generated with Generator-M-Ionic v1.8.0. For more info visit the [repository](https://github.com/mwaylabs/generator-m-ionic) or check out the README below.

### What's in the box

<p align="center">
  <a href="http://yeoman.io/" target="_blank" alt="yeoman" title="yeoman">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041228/c1f91cac-ac7a-11e4-9c85-1a5298e29067.png">
  </a>
  <a href="http://gulpjs.com/" target="_blank" alt="gulp" title="gulp">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9409728/c5332474-481c-11e5-9a6e-74641a0f1782.png">
  </a>
  <a href="http://bower.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041250/ef9a78b8-ac7a-11e4-9586-7e7e894e201e.png">
  </a>
  <a href="https://angularjs.org/" target="_blank" alt="angular" title="angular">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041199/5978cb96-ac7a-11e4-9568-829e2ea4312f.png">
  </a>
  <a href="http://ionicframework.com/" target="_blank" alt="ionic" title="ionic">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041296/59c5717a-ac7b-11e4-9d5d-9c5232aace64.png">
  </a>
  <a href="http://cordova.apache.org/" target="_blank" alt="cordova" title="cordova">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041269/20ed1196-ac7b-11e4-8707-68fa331f1aeb.png">
  </a>
  <br>
  <br>
  <a href="http://sass-lang.com/" target="_blank" alt="sass" title="sass">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410121/c330a3de-481e-11e5-8a69-ca0c56f6cabc.png">
  </a>
  <a href="http://karma-runner.github.io/" target="_blank" alt="karma" title="karma">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410216/44fef8fc-481f-11e5-8037-2f7f03678f4c.png">
  </a>
  <a href="http://jasmine.github.io/" target="_blank" alt="jasmine" title="jasmine">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410153/ebd46a00-481e-11e5-9864-f00fa8427d17.png">
  </a>
  <a href="https://angular.github.io/protractor/#/" target="_blank" alt="protractor" title="protractor">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410114/b99aaa9a-481e-11e5-8655-ebc1e324200d.png">
  </a>
</p>

#Contributing
##Installation
First of all you need gulp, bower and compass to start developing.

Execute the following commands with a terminal in the root folder of this project

```bash
$ npm install
$ bower install
$ gulp --cordova 'prepare'
$ gulp watch (--no-open)
```

##Project Structure

<pre>
└──  app/ - your application folder
│   └──  bower_components/    - local installation of bower packages
│   └──  main/                - ---main module---
│   │   ├──  assets/          - assets: fonts, images, translation, etc... go here
│   │   ├──  constants/       - angular constants
│   │   ├──  controllers/     - angular controllers
│   │   ├──  directives/      - angular directives
│   │   ├──  filters/         - angular filters
│   │   ├──  services/        - angular services
│   │   ├──  styles/          - scss styles
│   │   ├──  templates/       - angular templates
│   │   └──  main.js          - angular module definition, routing etc...
│   └──  anotherModule/       - ---another  module---
│   │   ├──  ...
│   ├──  app.js               - application module, includes main module, ionic, ui-router etc ...
│   └──  index.html           - angular entry point, injects: app files, bower files, fonts,  ...
├──  gulp/              - gulp tasks
├──  hooks/             - cordova hooks
├──  nodes_modules/     - local installation of node modules
├──  platforms/         - cordova platforms
├──  plugins/           - corodova plugins
├──  res/               - resources folder for splash screens and app icons
├──  test/              - unit and integration tests
├──  www/               - your gulp build goes here, cordova starts building from here
├──  .bowerrc           - bower configuration
├──  .editorconfig      - editor configuration
├──  .eslintignore      - ESLint ignore configuration
├──  .eslintrc          - ESLint configuration
├──  .gitattributes     - git's attribute configuration
├──  .gitignore         - git's ignore configuration
├──  .travis.yml        - travis continuous integration configuration
├──  .yo-rc.json        - yeoman's .yo-rc.json
├──  bower.json         - bower dependencies
├──  config.xml         - cordova's config.xml
├──  gulpfile.js        - entry point to all gulp tasks
├──  jenkins.sh         - shell script for jenkins continuous integration
├──  karma.conf.js      - karma configuration
├──  package.json       - node dependencies configuration
├──  protractor.conf.js - protractor configuration
├──  README.md          - the generator's README.md
</pre>

#Deployment
Build tasks that would provide by the m-ionic-generator
```bash
$ gulp build --force-build # build despite linting errors
$ gulp build --minify # minifies javascript, CSS, HTML and images.
```
##Android Publishing
To generate a release build for Android, we can use the following cordova cli command:
```bash
$ gulp --cordova 'build --release android' --force-build (--minify)
```
This will generate a release build based on the settings in your **config.xml**. Next, we can find our unsigned APK file in **platforms/android/build/outputs/apk**.
Before you can run the jarsigner command, copy the .keystore file into **platforms/android/build/outputs/apk**.
To sign the unsigned APK, run the **jarsigner** tool which is also included in the JDK:
```bash
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore codefor-key.keystore android-release-unsigned.apk cfgi
```
Enter the password for our keystore.

This signs the apk in place. Finally, we need to run the zip align tool to optimize the APK. The **zipalign** tool can be found in **/path/to/Android/sdk/build-tools/VERSION/zipalign.** For example, on OS X with Android Studio installed, zipalign is in **~/Library/Android/sdk/build-tools/VERSION/zipalign**:
```bash
$ zipalign -v 4 android-release-unsigned.apk RefugeeApp.apk
```
Now we have our final release binary called **RefugeeApp.apk** and we can release this on the Google Play Store for all the world to enjoy!

# License
Code licensed under MIT. Docs under Apache 2. PhoneGap is a trademark of Adobe.
