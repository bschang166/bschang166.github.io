'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('ContactCtrl', function ($scope, email, languageService) {
    $scope.email = email;

    $scope.lookupTerm = function(term){
      return languageService.lookupTerm('contact', term);
    };
  });
