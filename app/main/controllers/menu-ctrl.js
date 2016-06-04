'use strict';
angular.module('main')
  .controller('MenuCtrl', function ($ionicPopover, $ionicModal, $scope, Guidelinedata, Guidelineservice, $window, $ionicPopup) {

    /**
     *
     */
    $scope.setLangFlag = function () {
      switch (Guidelineservice.getLangKey()){
        case 'de_DE':
              return 'flag-icon flag-icon-de';
        case 'en_US':
              return 'flag-icon flag-icon-us';
        case 'ar_SY':
              return 'flag-icon flag-icon-sy';
        case 'fa_AF':
              return 'flag-icon flag-icon-af';
        case 'tr_TR':
              return 'flag-icon flag-icon-tr';
        case 'fr_FR':
              return 'flag-icon flag-icon-fr';
        default:
          return 'flag-icon flag-icon-us';
      }
    };

    /**
     *
     */
    $scope.loadContent = function () {
      var langKey = Guidelineservice.getLangKey();
      if ($window.cordova) {
        if (checkConnection() === Connection.WIFI) {
          Guidelinedata.getAllGuidesToLang(langKey);
          Guidelinedata.getAllCategories();
        } else {
          var confirmPopup = $ionicPopup.confirm({
            title: '{{"DOWN_CONTENT_TITLE"|translate}}',
            template: '{{"DOWN_CONTENT_TEXT"|translate}}',
            cancelText: '{{"CANCEL_BUTTON"|translate}}'
          });

          confirmPopup.then(function (res) {
          });
        }
      } else {
        Guidelinedata.getAllGuidesToLang('de_DE');
        Guidelinedata.getAllCategories();
      }
    };

    /**
     *
     */
    var checkConnection = function () {
     return navigator.connection.type;
     };

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('popover.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function () {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function () {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function () {
      // Execute action
    });

    $ionicModal.fromTemplateUrl('main/templates/lang-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });
  });
