'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('ProjectCtrl', function ($scope, $timeout, $log, githubRepoService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repos = [];

    githubRepoService.getRepos(function(reposData){
      $scope.repos = reposData;
    });

  });
