'use strict';
angular.module('main')
  .controller('DashCtrl', function ($scope, $q, Guidelineservice) {

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
  });
