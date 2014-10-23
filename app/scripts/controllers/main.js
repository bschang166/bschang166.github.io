'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('MainCtrl', function ($scope, $log, languageService, techService) {
    $scope.lookupTerm = function(term){
        return languageService.lookupTerm('main', term);
    };

    $scope.selected = '';

    var techMap = techService.getTechList();

    $scope.techList = [];
    var keywords = [];
    for(var key in techMap){
      if (techMap.hasOwnProperty(key)){
        $scope.techList.push(techMap[key]);
        keywords = keywords.concat(techMap[key].keywords);
      }
    }
    $scope.techKeywords = keywords.reduce(function(prev, curr){
      if (prev.indexOf(curr) < 0) {
        prev.push(curr);
      }
      return prev;
    }, []);

  });
