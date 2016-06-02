'use strict';
angular.module('main')
  .controller('AboutCtrl', function ($scope, $window, $ionicPopup, $cordovaDevice, Config, $ionicLoading, $http, toastr) {

    this.ENV = Config.ENV;
    var statsUrl = this.ENV.SERVER_URL + '/stats';
    var feedbackUrl = this.ENV.SERVER_URL + '/feedback';

    this.rating = {};
    this.rating.max= 5;

    this.formdata = {
      email: '',
      rating: -1,
      text: ' '
    };

    this.deviceData = {};

    /**
     *
     */
    this.sendFeedback = function () {
      //this.clearFields();
      if (this.formdata.email === undefined || this.formdata.rating === -1) {
        $ionicPopup.alert({
          title: 'Fehler',
          template: 'Sie haben entweder keine Email oder keine Bewertung abgegeben.',
          buttons: [{
            text: 'Schließen',
            type: 'button-positive'
          }]
        });
      } else {
        if ($window.cordova && cordova.plugins.device) {
          this.deviceData = $cordovaDevice.getDevice();

          var promiseStats = $http.post(statsUrl, this.deviceData);

          promiseStats.success(function (status) {
            if (status === 201) {
              toastr.success('device data send');
              return status;
            }
          })
            .error(function (status) {
              toastr.error('could not send device data');
              return status;
            });
        } else {
          $ionicPopup.alert({
            title: 'Info',
            template: 'Geräteinformationen können nicht abgefragt werden.',
            buttons: [{
              text: 'Schließen',
              type: 'button-positive'
            }]
          });
        }
        $ionicLoading.show();

        var promiseFeedback = $http.post(feedbackUrl, this.formdata);

        promiseFeedback.success(function (status) {
          if (status === 201) {
            toastr.success('feedback data send');
            return status;
          }
        })
          .error(function (status) {
            toastr.error('could not send feedback data');
            return status;
          })
          .finally(function () {
            $ionicLoading.hide();
          })
      }
    };

      /**
       *
       */
    this.clearFields = function () {
      var formElement = document.getElementById('feedbackForm');
      //var angularElement = angular.element(formElement);
      //angularElement.scope().clearFields();
      var emailInput = document.getElementById('email');
      var angularInput = angular.element(emailInput);

      var rating = document.getElementById('textarea').clear();
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
