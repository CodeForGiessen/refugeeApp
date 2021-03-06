'use strict';
angular.module('main')
.controller('StartCtrl', function ($translate, $q, $ionicLoading, $state, $scope, Guidelinedata, $ionicHistory, toastr, $ionicSideMenuDelegate) {

  //needed for start template
  $ionicSideMenuDelegate.canDragContent(false);

  /**
   *
   * @param key which is used for the translate module
   */
  this.setLang = function (key) {
    var targetState = 'main.dashboard';
    window.localStorage.setItem('defaultState', targetState);

    $translate.use(key)
      .then(function (key) {
        $ionicLoading.show();

        $q.all([
          Guidelinedata.getAllCategories(),
          Guidelinedata.getAllGuidesToLang(key),
          Guidelinedata.getAllGuidesToLang('en_US')
        ])
          .then(function (res) {
            var cat = res[0];
            var guides = res[1];
            $scope.categories = cat;
            $scope.guides = guides;
          })
          .finally(function () {
            $ionicLoading.hide();
            $state.go(targetState);
          });

        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          historyRoot: true
        });
      }, function (key) {
        $translate(['TOAST_CHANGED_LANG_NOT'])
          .then(function (translations) {
            toastr.error(translations.TOAST_CHANGED_LANG_NOT + key);
          });
      });
  };
});
