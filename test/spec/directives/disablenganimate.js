'use strict';

describe('Directive: disableNgAnimate', function () {

  // load the directive's module
  beforeEach(module('hpApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<disable-ng-animate></disable-ng-animate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the disableNgAnimate directive');
  }));
});
