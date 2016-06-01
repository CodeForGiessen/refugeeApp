'use strict';
angular.module('main')
.controller('AboutCtrl', function ($scope, $window, $ionicPopup, $log) {

  this.formdata = [
    {
      email: ''
    },
    {
      rating: -1
    },
    {
      message: ''
    }
  ];

  /**
   *
   */
  this.sendFeedback = function () {
    $log.log(this.formdata.email);
    $log.log(this.formdata.rating);
    $log.log(this.formdata.message);

    //todo cordova device information abfragen und zusammen mit den form daten zum server senden
    //todo danach sollten die input felder wieder gelöscht werden
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
    {name: 'Julian Schmitt', task: 'Service'},
    {name: 'Florian Kolb', task: 'App und Organisation'},
    {name: 'Katharina Dort', task: 'Design und Icons'},
    {name: 'Lukas Leander Rosenstock', task: 'Helpdesk und App'},
    {name: 'Prof. Dr. Martin Przewloka', task: 'Organisation'},
    {name: 'Wilfried Jost', task: 'Kommunikation mit Behörden und Flüchtlingslagern'}
  ];

  /**
   *
   */
  this.sendMail = function () {
    if ($window.cordova && cordova.plugins.email) {
      cordova.plugins.email.open({
        to: 'flo@floriankolb.de',
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
