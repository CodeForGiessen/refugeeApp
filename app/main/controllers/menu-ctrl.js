'use strict';
angular.module('main')
  .controller('MenuCtrl', function ($ionicPopover, $ionicModal, $scope, Guidelinedata, Guidelineservice, $window, $ionicPopup, $translate) {

    /**
     * This function check the current language key and inject the proper flag-icon to the navbar.
     */
    $scope.setLangFlag = function () {
      switch (Guidelineservice.getLangKey()) {
        case 'de_DE':
          return 'flag-icon flag-icon-de';
        case 'en_US':
          return 'flag-icon flag-icon-us';
        case 'ar_SY':
          return 'flag-icon flag-icon-sy';
        //case 'fa_AF':
          //return 'flag-icon flag-icon-af';
        case 'tr_TR':
          return 'flag-icon flag-icon-tr';
        //case 'fr_FR':
          //return 'flag-icon flag-icon-fr';
        default:
          return 'flag-icon flag-icon-us';
      }
    };

    /**
     * Check the internet connection and return connection type.
     */
    var checkConnection = function () {
      return navigator.connection.type;
    };

    /**
     * Load new content from the server.
     */
    $scope.loadContent = function () {
      var langKey = Guidelineservice.getLangKey();
      if ($window.cordova) {
        if (checkConnection() === Connection.WIFI) {
          Guidelinedata.getAllGuidesToLang(langKey);
          Guidelinedata.getAllCategories();
        } else {
          $translate(['DOWN_CONTETN_TITLE', 'DOWN_CONTENT_TEXT', 'CANCEL_BUTTON', 'OK_BUTTON'])
            .then(function (translations) {
              var confirmPopup = $ionicPopup.confirm({
                title: translations.DOWN_CONTENT_TITLE,
                template: translations.DOWN_CONTENT_TEXT,
                buttons: [
                  {
                    text: translations.CANCEL_BUTTON,
                    type: 'button teal lighten-4 white-text'
                  },
                  {
                    text: translations.OK_BUTTON,
                    type: 'button teal lighten-2 white-text'
                  }]
              });

              confirmPopup.then(function (res) {
                //console.log(res);
              });
            });
        }
      } else {
        Guidelinedata.getAllGuidesToLang(langKey);
        Guidelinedata.getAllCategories();
      }
    };

    /**
     *
     */
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

    /**
     *
     */
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
