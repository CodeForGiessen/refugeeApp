'use strict';

describe('module: main, service: Guidelineservice', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Guidelineservice;
  beforeEach(inject(function (_Guidelineservice_) {
    Guidelineservice = _Guidelineservice_;
  }));

  it('should do something', function () {
    expect(!!Guidelineservice).toBe(true);
  });

  describe('testing localstorage functions', function () {
    it('should get the right language key', function () {
      var langkey = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
      expect(Guidelineservice.getLangKey()).toEqual(langkey);
    });

    it('should get all categories', function () {
      var cats = localStorage.getItem('categories');
      expect(Guidelineservice.findAllCategories()).toEqual(cats);
    });

    it('should get all guidelines');
    it('should get all guidelines by cat ID');
    
    it('should get motd', function () {
      var motd = localStorage.getItem('motd');
      expect(Guidelineservice.findMotd()).toEqual(motd);
    });
  });

});
