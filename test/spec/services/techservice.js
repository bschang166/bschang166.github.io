'use strict';

describe('Service: techService', function () {

  // load the service's module
  beforeEach(module('hpApp'));

  // instantiate service
  var techService;
  beforeEach(inject(function (_techService_) {
    techService = _techService_;
  }));

  it('should do something', function () {
    expect(!!techService).toBe(true);
  });

});
