'use strict';

describe('module: main, controller: StartCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var StartCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartCtrl = $controller('StartCtrl', {$scope: scope});
  }));

  describe('valid?', function () {
    it('should be valid', function () {
      expect(!!StartCtrl).toBe(true);
    });
  });

  describe('setting the right language', function () {
    it('should call setLang function', function () {
      spyOn(StartCtrl, 'setLang');
      var langkey = 'en_US';
      StartCtrl.setLang(langkey);
      expect(StartCtrl.setLang).toHaveBeenCalledWith(langkey);
    });
  });
});
