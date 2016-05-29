'use strict';
angular.module('main')
  .controller('LanguageCtrl', function ($scope, $translate, Guidelinedata, toastr) {

    /**
     *
     * @param key
     */
    $scope.changeLang = function (key) {
      $translate.use(key).then(function (key) {
        if (!localStorage.getItem('guidelines_' + key)) {
          Guidelinedata.getAllCategories();
          Guidelinedata.getAllGuidesToLang(key);
        }
        toastr.info('You have changed the language to ' + key, 'Success');
      }, function (key) {
        toastr.error('Tried to set the language ' + key, 'Error');
      });
    };
  });
