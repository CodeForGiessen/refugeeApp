'use strict';

describe('module: main, service: Guidelinedata', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Guidelinedata;
  beforeEach(inject(function (_Guidelinedata_) {
    Guidelinedata = _Guidelinedata_;
  }));

  it('should do something', function () {
    expect(!!Guidelinedata).toBe(true);
  });

});
