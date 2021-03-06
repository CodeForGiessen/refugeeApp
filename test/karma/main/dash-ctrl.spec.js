'use strict';

xdescribe('module: main, controller: DashCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DashCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashCtrl = $controller('DashCtrl', {$scope: scope});
  }));

  it('should do something', function () {
    expect(!!DashCtrl).toBe(true);
  });
});
