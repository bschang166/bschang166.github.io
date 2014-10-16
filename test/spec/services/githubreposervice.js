'use strict';

describe('Service: githubRepoService', function () {

  // load the service's module
  beforeEach(module('hpApp'));

  // instantiate service
  var githubRepoService;
  beforeEach(inject(function (_githubRepoService_) {
    githubRepoService = _githubRepoService_;
  }));

  it('should do something', function () {
    expect(!!githubRepoService).toBe(true);
  });

});
