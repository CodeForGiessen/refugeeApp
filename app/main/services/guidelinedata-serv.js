'use strict';
angular.module('main')
  .service('Guidelinedata', function ($q, $http, $ionicLoading, toastr, Config, $translate) {
    this.ENV = Config.ENV;
    var guidelinesUrl = this.ENV.SERVER_URL + '/guides';
    var categoriesUrl = this.ENV.SERVER_URL + '/categories';
    var timeout = this.ENV.TIMEOUT;
    var lastModified = localStorage.getItem('guidelinesLastModified');
    var reqOptions = {};

    /**
     *
     * @param lang
     * @returns {*}
     */
    var getAllGuidesToLang = function (lang) {
      $ionicLoading.show();

      if (lastModified) {
        reqOptions.headers = {'If-Modified-Since': lastModified};
      }

      return $http.get(guidelinesUrl + '?lang=' + lang + '&published=true', {
        timeout: timeout
      })
      .then(function (response) {
        //todo nur runterladen wenn es seit dem letzten mal änderungen gibt
        if (response.status === 200 && angular.isArray(response.data.guides)) {
          var guidelines = response.data.guides;
          localStorage.setItem('guidelines_' + lang, JSON.stringify(guidelines));
          var respHeaders = response.headers();
          localStorage.setItem('guidelinesLastModified', respHeaders['last-modified']);
          $translate(['TOAST_DOWNLOAD_SUCCESS'])
            .then(function (translations) {
              toastr.success(translations.TOAST_DOWNLOAD_SUCCESS);
            });
        } else {
          $translate(['TOAST_DOWNLOAD_UPDATE'])
            .then(function (translations) {
              toastr.info(translations.TOAST_DOWNLOAD_UPDATE);
            });
        }
      }, function () {
        $translate(['TOAST_DOWNLOAD_ERROR'])
          .then(function (translations) {
            toastr.error(translations.TOAST_DOWNLOAD_ERROR);
          });
      })
        .finally(function () {
          $ionicLoading.hide();
        });

      /*if (lastModified) {
       reqOptions.headers = {'If-Modified-Since': lastModified};
       }

       var promise = $http.get(guidelinesUrl + '?lang=' + lang + '&published=true', reqOptions);

       promise.success(function (data, status, headers, config) {
       if (status === 200 && angular.isArray(data.guides)) {
       //var guidelines = data;
       localStorage.setItem('guidelines_' + lang, JSON.stringify(data.guides));
       toastr.info('Language set to ' + lang);
       var respHeaders = headers();
       localStorage.setItem('guidelinesLastModified', respHeaders['last-modified']);
       return status;
       }
       })
       .error(function (data, status, headers, config) {
       toastr.error('Could not retrieve data.');
       return status;
       })
       .finally(function () {
       $ionicLoading.hide();
       });*/
    };

    /**
     *
     * @param lang
     */
    var getAllCategories = function () {
      return $http.get(categoriesUrl, {
        timeout: timeout
      })
        .then(function (response) {
          if (response.status === 200) {

            var categories = response.data.categories;
            localStorage.setItem('categories', JSON.stringify(categories));

            return categories;
          }
        });
    };

    /**
     *
     * @type {{getAllGuidesToLang: getAllGuidesToLang}}
     */
    var service = {
      /**
       *
       */
      getAllGuidesToLang: getAllGuidesToLang,

      /**
       *
       */
      getAllCategories: getAllCategories
    };

    return service;
  });
