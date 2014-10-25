'use strict';

/**
 * @ngdoc filter
 * @name hpApp.filter:newlines
 * @function
 * @description
 * # newlines
 * Filter in the hpApp.
 */
angular.module('hpApp')
  .filter('nl2br', function () {
    return function (input) {
      if (angular.isString(input)){
        return input.replace(/\n\r?/g, '<br/>');
      } else {
        return '';
      }
    };
  });
