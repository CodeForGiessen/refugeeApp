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

  describe('testing aboutcontroller functions', function () {
    it('should get the right rating', function () {
      expect(AboutCtrl.rating).toBeDefined();
      AboutCtrl.rating = 3;
      expect(AboutCtrl.rating).toEqual(3);
    });

    it('should have a valid feedback model', function () {
      expect(AboutCtrl.formdata).toBeDefined();
      AboutCtrl.formdata.email = 'john@stark.king';
      AboutCtrl.formdata.rating = 5;
      AboutCtrl.formdata.text = 'Test...test...test';
      expect(AboutCtrl.formdata.email).toEqual('john@stark.king');
      expect(AboutCtrl.formdata.rating).toEqual(5);
      expect(AboutCtrl.formdata.text).toEqual('Test...test...test');
    });
  });

});
