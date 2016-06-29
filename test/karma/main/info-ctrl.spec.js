'use strict';

describe('module: main, controller: InfoCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var InfoCtrl;
  beforeEach(inject(function (_$controller_) {
    InfoCtrl = _$controller_;
  }));

});
