'use strict';
describe('About page', function(){

  beforeEach(function () {
    browser.get('/#/main/about');
  });

  it('should verify email', function () {

    var emailInput = element(by.model('ctrl.formdata.email'));
    var messageInput = element(by.model('ctrl.formdata.message'));

    emailInput.sendKeys('test@test.de');
    expect(emailInput.getText()).toEqual('test@test.de');

    messageInput.sendKeys('Das ist ein Textarea test.', protractor.Key.ENTER);
  });
});
