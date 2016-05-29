'use strict';

describe('module: main, service: Guidelineservice', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Guidelineservice;
  beforeEach(inject(function (_Guidelineservice_) {
    Guidelineservice = _Guidelineservice_;
  }));

  it('should do something', function () {
    expect(!!Guidelineservice).toBe(true);
  });

});
