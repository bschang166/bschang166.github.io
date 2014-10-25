'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('ProjectCtrl', function ($scope, $timeout, $log, $filter, languageService, githubRepoService, githubUsername) {

    var reposCountPerRow = 3;
    $scope.githubUsername = githubUsername;
    $scope.reposGroups;

    $scope.getRepos = function(){
      githubRepoService.getRepos(function(reposData){
        $scope.reposGroups = {};
        if (reposData.data){
          $scope.reposGroups.data = $filter('groupBy')(reposData.data, reposCountPerRow);
        }
        if (reposData.error){
          $scope.reposGroups.error = reposData.error;
        }
      });
    };
    $scope.getRepos();

    $scope.lookupRepoTerm = function(repo){
      return languageService.lookupTerm('project', repo.name);
    };
  });
