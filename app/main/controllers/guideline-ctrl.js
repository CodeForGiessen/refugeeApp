'use strict';
angular.module('main')
  .controller('GuidelineCtrl', function ($scope, $q, Guidelineservice, $state, $ionicLoading) {

    $ionicLoading.show();
    $scope.guides = Guidelineservice.findAllGuidelines();

    $scope.guideTitle = $state.params.title;
    $scope.index = $state.params.idx;

    //$scope.langKey = GuideLineService.getLangKey();
    //$scope.categories = GuideLineService.findAllCategories();

    $scope.catImages = [
      {
        path: 'main/assets/images/catImg/barista.jpeg'
      },
      {
        path: 'main/assets/images/catImg/beach.jpeg'
      },
      {
        path: 'main/assets/images/catImg/chicago.jpeg'
      },
      {
        path: 'main/assets/images/catImg/cloudsOverMountain.jpeg'
      },
      {
        path: 'main/assets/images/catImg/coast.jpeg'
      },
      {
        path: 'main/assets/images/catImg/glacier.jpeg'
      },
      {
        path: 'main/assets/images/catImg/mountainHouse.jpeg'
      },
      {
        path: 'main/assets/images/catImg/mountainRiver.jpeg'
      },
      {
        path: 'main/assets/images/catImg/mountainSea.jpeg'
      },
      {
        path: 'main/assets/images/catImg/neuSchwanStein.jpeg'
      },
      {
        path: 'main/assets/images/catImg/oldTruck.jpeg'
      },
      {
        path: 'main/assets/images/catImg/skiLift.jpeg'
      },
      {
        path: 'main/assets/images/catImg/skyline.jpeg'
      },
      {
        path: 'main/assets/images/catImg/soccerStadium.jpeg'
      },
      {
        path: 'main/assets/images/catImg/strawbeeries.jpeg'
      },
      {
        path: 'main/assets/images/catImg/tipi.jpeg'
      },
      {
        path: 'main/assets/images/catImg/trains.jpeg'
      },
      {
        path: 'main/assets/images/catImg/trees.jpeg'
      },
      {
        path: 'main/assets/images/catImg/universum.jpeg'
      },
      {
        path: 'main/assets/images/catImg/water.jpeg'
      },
      {
        path: 'main/assets/images/catImg/waterfall.jpeg'
      }];

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
