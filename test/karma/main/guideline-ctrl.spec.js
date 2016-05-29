'use strict';

describe('module: main, controller: GuidelineCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var GuidelineCtrl;
  beforeEach(inject(function ($controller) {
    GuidelineCtrl = $controller('GuidelineCtrl');
  }));

  it('should do something', function () {
    expect(!!GuidelineCtrl).toBe(true);
  });

});
