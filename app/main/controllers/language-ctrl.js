'use strict';
angular.module('main')
  .controller('LanguageCtrl', function ($scope, $translate, Guidelinedata, Guidelineservice, toastr) {

    /**
     *
     * @param key
     */
    $scope.changeLang = function (key) {
      $translate.use(key).then(function (key) {
        if (!localStorage.getItem('guidelines_' + key)) {
          Guidelinedata.getAllCategories();
          Guidelinedata.getAllGuidesToLang(key);
          localStorage.removeItem('currentDate');
        } else {
          localStorage.removeItem('currentDate');
        }
        $translate(['TOAST_CHANGED_LANG'])
          .then(function (translations) {
            toastr.success(translations.TOAST_CHANGED_LANG + key);
          });
      }, function (key) {
        $translate(['TOAST_CHANGED_LANG_NOT'])
          .then(function (translations) {
            toastr.error(translations.TOAST_CHANGED_LANG_NOT + key);
          });
      });
    };
  });
