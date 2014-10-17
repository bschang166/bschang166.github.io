'use strict';

describe('Directive: githubRepo', function () {

  // load the directive's module
  beforeEach(module('hpApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<github-repo></github-repo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the githubRepo directive');
  }));
});
