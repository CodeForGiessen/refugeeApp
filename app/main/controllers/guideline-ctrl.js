'use strict';
angular.module('main')
  .controller('GuidelineCtrl', function ($scope, $q, Guidelineservice, $state, $ionicLoading) {

    this.guideTitle = $state.params.title;
    var index = $state.params.idx;
    this.guides = Guidelineservice.findGuidelinesByCatID(index);

    this.catImages = [
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
        });
    };

    $scope.reload = reload();

    $scope.$on('$ionicView.enter', reload);
  });
