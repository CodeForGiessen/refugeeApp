'use strict';
angular.module('main')
  .controller('GuidelineCtrl', function ($scope, $q, Guidelineservice, $state, $ionicLoading) {

    $scope.guides = Guidelineservice.findAllGuidelines();

    $scope.guideTitle = $state.params.title;
    $scope.index = $state.params.idx;

    //$scope.langKey = GuideLineService.getLangKey();
    //$scope.categories = GuideLineService.findAllCategories();

    var reload = function () {
      $ionicLoading.show();

      $q.all([
        Guidelineservice.getLangKey(),
        Guidelineservice.findAllCategories()
      ])
        .then(function (res) {
          var langKey = res[0];
          var categories = res[1];
          $scope.langKey = langKey;
          $scope.categories = categories;
        })
        .finally(function () {
          $ionicLoading.hide();
          //$scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.reload = reload();

    $scope.$on('$ionicView.enter', reload);
  });
