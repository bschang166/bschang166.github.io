'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('ProjectCtrl', function ($scope, $timeout, $log, $filter, languageService, githubRepoService) {

    var reposCountPerRow = 3;
    $scope.reposGroups = [];

    githubRepoService.getRepos(function(reposData){
      $scope.reposGroups = $filter('groupBy')(reposData, reposCountPerRow);
    });

    $scope.lookupRepoTerm = function(repo){
      return languageService.lookupTerm('project', repo.name);
    };
  });
