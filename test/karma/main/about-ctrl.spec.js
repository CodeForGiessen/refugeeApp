'use strict';

describe('module: main, controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AboutCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {$scope: scope});
  }));

  it('should do something', function () {
    expect(!!AboutCtrl).toBe(true);
  });

});
