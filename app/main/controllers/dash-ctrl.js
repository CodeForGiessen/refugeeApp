'use strict';
angular.module('main')
  .controller('DashCtrl', function ($scope, $q, Guidelineservice, $log, $window, $cordovaDevice, $http, Config) {

    /**
     *
     */
    document.addEventListener('deviceready', function () {
      $log.log(window.localStorage.getItem('firstStart'));
      if ($window.cordova && window.localStorage.getItem('firstStart') === 'true') {
        $log.log('is first start');
        this.deviceData = $cordovaDevice.getDevice();

        return $http.post(Config.ENV.SERVER_URL + '/stats', {'device': this.deviceData})
          .then(function (response) {
            if (response.status === 201) {
              window.localStorage.setItem('firstStart', 'false');
              return response.status;
            }
          },
          function (response) {
            return response.status;
          });
      }
    });

    $scope.langKey = Guidelineservice.getLangKey();
    $scope.guides = Guidelineservice.findAllGuidelines();
    $scope.categories = Guidelineservice.findAllCategories();


    /**
     *
     * @returns {{title: string, text: string}}
     */
    var getMotd = function () {
      var result = {title: '', text: ''};
      var catID = '';
      var date = new Date();
      var currentDate = localStorage.getItem('currentDate');
      var newDate = date.getDay();

      if (newDate != currentDate) {
        $q.all([
          Guidelineservice.getLangKey(),
          Guidelineservice.findAllGuidelines(),
          Guidelineservice.findAllCategories()
        ])
          .then(function (res) {
            var lang = res[0];
            var guides = res[1];
            var cat = res[2];
            $scope.langKey = lang;
            $scope.guides = guides;
            $scope.categories = cat;
          });

        var rand = Math.floor((Math.random() * $scope.guides.length));
        result.text = $scope.guides[rand].guidelines[0].text;
        catID = $scope.guides[rand].category;

        for (var j = 0; j < $scope.categories.length; j++) {
          if ($scope.categories[j]._id === catID) {
            result.title = $scope.categories[j].text[$scope.langKey];
          }
        }
        var dateNow = new Date();
        var curDate = dateNow.getDay();
        localStorage.setItem('currentDate', curDate);
        localStorage.setItem('motd', JSON.stringify(result));
        return result;
      } else {
        return Guidelineservice.findMotd();
      }
    };

    $scope.getMotd = getMotd();

    $scope.$on('$ionicView.enter', getMotd);
  });
