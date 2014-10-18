'use strict';

/**
 * @ngdoc directive
 * @name hpApp.directive:disableNgAnimate
 * @description
 * # disableNgAnimate
 */
angular.module('hpApp')
  .directive('disableNgAnimate', function ($animate) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        $animate.enabled(false, element);
      }
    };
  });
