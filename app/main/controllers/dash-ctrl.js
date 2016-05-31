'use strict';
angular.module('main')
  .controller('DashCtrl', function ($scope, $q, Guidelinedata, Guidelineservice, $state, $ionicLoading, $translate, $ionicHistory, toastr) {

    $scope.langKey = '';
    $scope.categories = {};
    $scope.guides = {};

    //todo: nur beim starten der app überprüfen und motd eintragen
    var getMotd = function () {
      var result = {title: '', text: ''};
      var catID = '';
      var date = new Date();
      var currentDate = localStorage.getItem('currentDate');
      var newDate = date.getDay();


      if (currentDate !== newDate && localStorage.getItem('categories')) {
        $scope.langKey = Guidelineservice.getLangKey();
        $scope.guides = Guidelineservice.findAllGuidelines();
        $scope.categories = Guidelineservice.findAllCategories();
        var rand = Math.floor((Math.random() * $scope.guides.length));
        result.text = $scope.guides[rand].guidelines[0].text;
        catID = $scope.guides[rand].category;
        /*for (var i = 0; i < $scope.guidelines.length; i++) {
         if ($scope.guidelines[i].guidelines[0].motd_flag === true) {
         result.text = $scope.guidelines[i].guidelines[0].text;
         catID = $scope.guidelines[i].category;
         console.log('if');
         }
         }*/

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

    $scope.$on('$ionicView.loaded', getMotd);

    /*$scope.$on('$ionicView.enter', function(){
     var result = {title: '', text: ''};
     var catID = '';

     if(localStorage.getItem('defaultState') === 'app.dashboard') {
     for (var i = 0; i < guides.length; i++) {
     if (guides[i].guidelines[0].motd_flag === true) {
     result.text = guides[i].guidelines[0].text;
     catID = guides[i].category;
     }
     }

     for (var j = 0; j < categories.length; j++) {
     if (categories[j]._id === catID) {
     result.title = categories[j].text[langKey];
     }
     }
     }
     $scope.getMotd = result;
     });*/

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
            Guidelinedata.getAllGuidesToLang(key)
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
          toastr.error('Ups...can not set your Language to ' + key + '!', 'Error');
        });
    };
  });
