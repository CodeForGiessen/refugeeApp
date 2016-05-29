'use strict';

describe('module: main, controller: LanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var LanguageCtrl;
  beforeEach(inject(function ($controller) {
    LanguageCtrl = $controller('LanguageCtrl');
  }));

  it('should do something', function () {
    expect(!!LanguageCtrl).toBe(true);
  });

});
