'use strict';

/**
 * @ngdoc directive
 * @name hpApp.directive:githubRepo
 * @description
 * # githubRepo
 */
angular.module('hpApp')
  .directive('githubRepo', function ($modal) {
    return {
      templateUrl: 'views/directives/githubrepo.html',
      restrict: 'E',
      transclude: true,
      scope:{
        info: '='
      },
      link: function(scope, elm, attrs){
        scope.open = function (info, size) {
          var modalInstance = $modal.open({
            templateUrl: 'views/directives/githubrepo_thumbnailmodal.html',
            controller: function($scope){
              $scope.repoName = info.name;
            },
            windowClass: 'github-repo-modal',
            size: size
          });
        };
      }
    };
  });
