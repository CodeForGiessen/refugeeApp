'use strict';
angular.module('main')
  .controller('InfoCtrl', function ($scope, $state, $window, $http, Guidelineservice) {

    $scope.index = $state.params.index;
    $scope.title = $state.params.title;

    /**
     * Get a JSON file for the information view. Selected by the language key.
     */
    var getJSON = function () {
      var langKey = Guidelineservice.getLangKey();

      if (langKey === 'de_DE') {
        $http.get('main/controllers/infos_de_DE.json')
          .success(function (data) {
            $scope.infos = data;
          });
      } else {
        $http.get('main/controllers/infos_en_US.json')
          .success(function (data) {
            $scope.infos = data;
          });
      }
    };

    $scope.infos = getJSON();

    $scope.$on('$ionicView.enter', getJSON);

    /**
     * Opens the InApp Browser with the given url
     * @param link to open
     */
    $scope.openLink = function (link) {
      if (link) {
        $window.open(link, '_system');
      }
    };

    /**
     * Opens the call application with the given number
     * @param number to call
     */
    $scope.openCall = function (number) {
      // window.plugins.CallNumber.callNumber()
      //   .onSuccess(function () {
      //     //console.log('success');
      //   })
      //   .onError(function () {
      //     //todo: toastr ausgabe
      //     //console.log('error');
      //   }, number, true);
      window.plugins.CallNumber.callNumber(function () {
        //success logic goes here
      }, function () {
        //error logic goes here
      }, number);
    };

    /**
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
      return group.show;
    };
  });
