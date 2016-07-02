'use strict';

describe('module: main, controller: InfoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var InfoCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoCtrl = $controller('InfoCtrl', {$scope: scope});
  }));

  describe('testing functions', function () {
    it('should call openlink function', function () {
      spyOn(scope, 'openLink');
      var link = 'http://www.google.de';
      scope.openLink(link);
      expect(scope.openLink).toHaveBeenCalledWith(link);
    });

    it('should call opencall function', function () {
      spyOn(scope, 'openCall');
      var number = '064132523';
      scope.openCall(number);
      expect(scope.openCall).toHaveBeenCalledWith(number);
    });
  });
});
