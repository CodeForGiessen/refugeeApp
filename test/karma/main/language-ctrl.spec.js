'use strict';

describe('module: main, controller: LanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var LanguageCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LanguageCtrl = $controller('LanguageCtrl', {$scope: scope});
  }));

  describe('testing language function', function () {
    it('should call changeLang function', function () {
      spyOn(scope, 'changeLang');
      var langkey = 'de_DE';
      scope.changeLang(langkey);
      expect(scope.changeLang).toHaveBeenCalledWith(langkey);
    });
  });
});
