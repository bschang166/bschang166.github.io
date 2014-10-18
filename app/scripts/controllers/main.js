'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('MainCtrl', function ($scope, languageService) {
    $scope.lookupTerm = function(term){
        return languageService.lookupTerm('main', term);
    };
  });
