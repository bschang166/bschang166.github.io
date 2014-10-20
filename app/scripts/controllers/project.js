'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('ProjectCtrl', function ($scope, $timeout, $log, languageService, githubRepoService) {
    $scope.repos = [];

    githubRepoService.getRepos(function(reposData){
      $scope.repos = reposData;
    });

    $scope.lookupRepoTerm = function(repo){
      return languageService.lookupTerm('project', repo.name);
    };
  });
