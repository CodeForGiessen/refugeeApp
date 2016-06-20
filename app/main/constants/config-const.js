'use strict';
angular.module('main')
  .constant('Config', {

    ENV: {
      /*inject-env*/
      'SERVER_URL': 'http://homesvr.spdns.de:8080/api/v1',
    'TIMEOUT': '60000'
      /*endinject*/
    },

    BUILD: {
      /*inject-build*/

      /*endinject*/
    }

  });
