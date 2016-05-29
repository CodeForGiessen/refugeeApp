'use strict';

describe('module: main, controller: DashCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DashCtrl;
  beforeEach(inject(function ($controller) {
    DashCtrl = $controller('DashCtrl');
  }));

  it('should do something', function () {
    expect(!!DashCtrl).toBe(true);
  });

});
