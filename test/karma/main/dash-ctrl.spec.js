'use strict';

describe('module: main, controller: DashCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var DashCtrl;
  var $scope = {};
  beforeEach(inject(function ($controller) {
    DashCtrl = $controller('DashCtrl', {$scope: $scope});
  }));

  it('should do something', function () {
    expect(!!DashCtrl).toBe(true);
  });

  //todo: test motd when newdate is 0 and currentdate is 6
  describe('getMotd', function () {
    it('print a new motd when new date is 0(sunday) and currentDate 6(saturday)', function () {
      var currentDate = 6;
      var newDate = 0;
      $scope.getMotd();
      expect(localStorage.getItem('currentDate')).toEqual(0);
    });
  });
});
