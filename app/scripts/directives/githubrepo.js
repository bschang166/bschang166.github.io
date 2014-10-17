'use strict';

/**
 * @ngdoc directive
 * @name hpApp.directive:githubRepo
 * @description
 * # githubRepo
 */
angular.module('hpApp')
  .directive('githubRepo', function () {
    return {
      templateUrl: 'views/directives/githubrepo.html',
      restrict: 'E',
      transclude: true,
      scope:{
        info: '='
      }
    };
  });
