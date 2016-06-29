'use strict';

describe('module: main, controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MenuCtrl;
  beforeEach(inject(function (_$controller_) {
    MenuCtrl = _$controller_;
  }));

});
