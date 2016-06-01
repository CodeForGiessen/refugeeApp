'use strict';

describe('module: main, controller: StartCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var StartCtrl;
  beforeEach(inject(function ($controller) {
    StartCtrl = $controller('StartCtrl');
  }));

  it('should do something', function () {
    expect(!!StartCtrl).toBe(true);
  });

});
