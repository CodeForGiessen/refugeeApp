'use strict';
angular.module('main')
  .controller('AboutCtrl', function ($scope, $window, $ionicPopup, $cordovaDevice, Config, $ionicLoading, $http, toastr, $translate) {

    this.ENV = Config.ENV;
    var feedbackUrl = this.ENV.SERVER_URL + '/feedback';

    this.rating = {};
    this.rating.max = 5;

    this.formdata = {
      email: '',
      rating: -1,
      text: ' '
    };
    /**
     *
     */
    this.sendFeedback = function () {
      //this.clearFields();
      if (this.formdata.email === undefined || this.formdata.rating === -1) {
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

        return $http.post(feedbackUrl, {'feedback': this.formdata})
          .then(function (response) {
              if (response.status === 201) {
                $translate(['TOAST_FEEDBACK_SEND'])
                  .then(function (translations) {
                    toastr.success(translations.TOAST_FEEDBACK_SEND);
                  });
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
    this.clearFields = function () {
      //var formElement = document.getElementById('feedbackForm');
      //var angularElement = angular.element(formElement);
      //angularElement.scope().clearFields();
      //var emailInput = document.getElementById('email');
      //var angularInput = angular.element(emailInput);

      //var rating = document.getElementById('textarea').clear();
      //this.formdata = angular.copy(feedbackForm);
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
