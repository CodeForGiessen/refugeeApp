'use strict';

xdescribe('module: main, controller: GuidelineCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var GuidelineCtrl;
  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuidelineCtrl = $controller('GuidelineCtrl', {$scope: scope});
  }));

  it('should do something', function () {
    expect(!!GuidelineCtrl).toBe(true);
  });

});
