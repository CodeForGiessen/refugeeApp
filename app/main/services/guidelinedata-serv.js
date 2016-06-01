'use strict';
angular.module('main')
  .service('Guidelinedata', function ($q, $http, $ionicLoading, toastr, Config) {
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
      /*if (lastModified) {
       reqOptions.headers = {'If-Modified-Since': lastModified};
       }
       /*return $http.get(guidelinesUrl + '?lang=' + lang + '&published=true', reqOptions{
       timeout: timeout
       })
       .then(function (response) {
       //todo nur runterladen wenn es seit dem letzten mal änderungen gibt
       if (response.status === 200 && angular.isArray(response.data.guides)) {
       //console.log(response.status);
       //console.log(response.statusText);
       //console.log(response.headers);
       var guidelines = response.data.guides;
       localStorage.setItem('guidelines_' + lang, JSON.stringify(guidelines));
       var respHeaders = response.headers();
       localStorage.setItem('guidelinesLastModified', respHeaders['last-modified']);
       toastr.success('New data has been downloaded!', 'Update complete');
       //Materialize.toast('Update complete', 3000, 'rounded');
       //return guidelines;
       } else {
       //console.log('not-modified');
       toastr.info('Already up-to-date. No update necessary');
       }
       }, function (response) {
       toastr.error('Could not retrieve data. ' + response.status);
       })
       .finally(function () {
       $ionicLoading.hide();
       });*/

      if (lastModified) {
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
        });
    };

    /**
     *
     * @param lang
     */
    var getAllCategories = function () {
      return $http.get(categoriesUrl, {
        //timeout: timeout
      })
        .then(function (response) {
          if (response.status === 200) {

            var categories = response.data.categories;
            localStorage.setItem('categories', JSON.stringify(categories));

            return categories;
          } else if (response.status === 304) {
            toastr.info('No new categories');
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
