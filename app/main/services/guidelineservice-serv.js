'use strict';
angular.module('main')
  .service('Guidelineservice', function () {

    /**
     * Get the actual language key which was set by the user via angular-translate
     */
    this.getLangKey = function () {
      return localStorage.getItem('NG_TRANSLATE_LANG_KEY');
    };

    /**
     * Get all categories that stored by the last update.
     */
    this.findAllCategories = function () {
      var cats = localStorage.getItem('categories');
      return JSON.parse(cats);
    };

    /**
     * Get all guidelines that stored by the last update.
     */
    this.findAllGuidelines = function () {
      var guides = localStorage.getItem('guidelines_' + this.getLangKey());
      return JSON.parse(guides);
    };

      /**
       *
       * @param catID
       */
    this.findGuidelinesByCatID = function (catID) {
      var guidelines = localStorage.getItem('guidelines_' + this.getLangKey());
      return JSON.parse(guidelines).filter(function (guideline) {
        return guideline.category === catID;
      });
    };

    /**
     *
     */
    this.findMotd = function () {
      var motd = localStorage.getItem('motd');
      return JSON.parse(motd);
    };
  });
