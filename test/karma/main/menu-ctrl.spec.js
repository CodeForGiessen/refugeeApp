'use strict';

describe('module: main, controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MenuCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {$scope: scope});
  }));

  describe('valid?', function () {
    xit('should be valid', function () {
      expect(!!MenuCtrl).toBe(true);
    });
  });

  describe('testing functions', function () {
    xit('should call setLangFlag function', function () {
      spyOn(scope, 'setLangFlag');
      scope.setLangFlag();
      expect(scope.setLangFlag).toHaveBeenCalled();
    });

    xit('should call loadContent function', function () {
      spyOn(scope, 'loadContent');
      scope.loadContent();
      expect(scope.loadContent).toHaveBeenCalled();
    });
  });

});
