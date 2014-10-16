'use strict';

describe('Service: languageService', function () {

  // load the service's module
  beforeEach(module('hpApp'));

  // instantiate service
  var languageService;
  beforeEach(inject(function ( _languageService_ ) {
    languageService = _languageService_;
  }));

  it('should start with default language set to English', function () {
    var currentLanguage = languageService.getCurrentLanguage();

    var
      name = currentLanguage.name,
      code = currentLanguage.code
    ;

    expect(name).toBe('English');
    expect(code).toBe('en-us');
  });

});
