'use strict';
angular.module('main')
  .controller('AboutCtrl', function ($scope, $window, $ionicPopup, $cordovaDevice, Config, $ionicLoading, $http, toastr, $translate) {

    this.ENV = Config.ENV;
    var feedbackUrl = this.ENV.SERVER_URL + '/feedback';

    $scope.form = {};
    this.rating = {};
    this.rating.max = 5;

    $scope.formdata = {
      email: '',
      rating: -1,
      text: ' '
    };
    /**
     *
     */
    this.sendFeedback = function () {
      //this.clearFields();
      if ($scope.formdata.email === '' || $scope.formdata.rating === -1) {
        $translate(['FORM_VERIFY_TITLE', 'FORM_VERIFY_TEXT', 'OK_BUTTON'])
          .then(function (translations) {
            $ionicPopup.alert({
              title: translations.FORM_VERIFY_TITLE,
              template: translations.FORM_VERIFY_TEXT,
              buttons: [{
                text: translations.OK_BUTTON,
                type: 'button teal lighten-2 white-text'
              }]
            });
          });
      } else {
        $ionicLoading.show();

        return $http.post(feedbackUrl, {'feedback': $scope.formdata})
          .then(function (response) {
              if (response.status === 201) {
                $translate(['TOAST_FEEDBACK_SEND'])
                  .then(function (translations) {
                    toastr.success(translations.TOAST_FEEDBACK_SEND);
                  });
                $scope.clearFields();
                return response.status;
              }
            },
            function (response) {
              $translate(['TOAST_FEEDBACK_NOTSEND'])
                .then(function (translations) {
                  toastr.error(translations.TOAST_FEEDBACK_NOTSEND);
                });
              return response.status;
            })
          .finally(function () {
            $ionicLoading.hide();
          });
      }
    };

    /**
     *
     */
    $scope.clearFields = function () {
      $scope.formdata = angular.copy($scope.form.feedbackForm);
      $scope.form.feedbackForm.$setPristine();
    };

    /**
     *
     * @param link
     */
    this.openLink = function (link) {
      if (link) {
        $window.open(link, '_system');
      }
    };

    /**
     *
     * @type {Array}
     */
    $scope.contributors = [
      {name: 'Julian Schmitt', task: 'Backend'},
      {name: 'Florian Kolb', task: 'Frontend und Organisation'},
      {name: 'Katharina Dort', task: 'Deutsche/Englische Texte'},
      {name: 'Lukas Leander Rosenstock', task: 'Helpdesk und Frontend'},
      {name: 'Prof. Dr. Martin Przewloka', task: 'Organisation'},
      {name: 'Wilfried Jost', task: 'Kommunikation mit Behörden und Flüchtlingslagern'}
    ];

    /**
     *
     */
    this.sendMail = function () {
      if ($window.cordova && cordova.plugins.email) {
        cordova.plugins.email.open({
          to: 'codeforgi@gmail.com',
          subject: 'RefugeeApp',
          body: ''
        });
      } else {
        $ionicPopup.alert({
          title: 'Info',
          template: 'Keine Email-Unterstützung!',
          buttons: [{
            text: 'Schließen',
            type: 'button-positive'
          }]
        });
      }
    };
  });
