'use strict';

describe('Filter: groupby', function () {

  // load the filter's module
  beforeEach(module('hpApp'));

  // initialize a new instance of the filter before each test
  var groupby;
  beforeEach(inject(function ($filter) {
    groupby = $filter('groupby');
  }));

  it('should return the input prefixed with "groupby filter:"', function () {
    var text = 'angularjs';
    expect(groupby(text)).toBe('groupby filter: ' + text);
  });

});
