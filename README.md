#**Code for Giessen - RefugeeApp**

#Introduction
This project is a frontend application that works with the corresponding ![backend](https://github.com/CodeForGiessen/refugeeService).

This project was generated with Generator-M-Ionic v1.8.0. For more info visit the [repository](https://github.com/mwaylabs/generator-m-ionic) or check out the README below.

[![NPM version](http://img.shields.io/npm/v/generator-m-ionic.svg?style=flat-square)][npm-url]

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
