'use strict';

describe('module: main, controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MapCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {$scope: scope});
  }));

  it('should do something', function () {
    expect(!!MapCtrl).toBe(true);
  });
});
