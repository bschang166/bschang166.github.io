'use strict';

/**
 * @ngdoc directive
 * @name hpApp.directive:techContainer
 * @description
 * # techContainer
 */
angular.module('hpApp')
  .directive('techContainer', function () {
    return {
      templateUrl: 'views/directives/techcontainer.html',
      restrict: 'E',
      scope:{
        techHeading: '@',
        techList : '=techData',
        search: '=',
        techFilter: '=techFilter'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
