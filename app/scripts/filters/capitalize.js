'use strict';

/**
 * @ngdoc filter
 * @name hpApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the hpApp.
 */
angular.module('hpApp')
  .filter('capitalize', function () {
    var capStr = function(input){
      if (angular.isString(input)){
        var lowercase = input.toLowerCase();
        return lowercase.substring(0,1).toUpperCase() + lowercase.substring(1);
      } else {
        return '';
      }
    };

    return function (input) {
      if (angular.isArray(input)){
        return input.map(function(str){
          return capStr(str);
        });
      }
      else if (angular.isString(input)){
        return capStr(input);
      }
    };
  });
