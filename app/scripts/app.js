'use strict';

/**
 * @ngdoc overview
 * @name hpApp
 * @description
 * # hpApp
 *
 * Main module of the application.
 */
angular
  .module('hpApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('githubUsername', 'bschang166')
  .constant('email', 'bschang166@gmail.com')
  .config(function ($routeProvider, $logProvider) {
    $logProvider.debugEnabled(false);
	
	$routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }).
  controller('BodyCtrl', function($scope, languageService, $location){

    $scope.lookupHeader = function(headerToLookup){
      return languageService.lookupTerm('header', headerToLookup);
    };

    $scope.headerClass = function(header){
      var currentHeader = $location.path().substring(1) || '/';
      return currentHeader === header? 'active' : '';
    };

    $scope.languages = languageService.getLanguages();
    $scope.setLanguage = function(langKey){
      languageService.setLanguage(langKey);
    };
    $scope.getCurrentLanguageInfo = function(){
      return languageService.getCurrentLanguageInfo();
    };
    $scope.getCurrentLanguageName = function(){
      var languageCode = languageService.getCurrentLanguageInfo().code;
      return $scope.lookupFooter('language_name')[languageCode];
    };
    $scope.lookupFooter = function(footerToLookup){
      return languageService.lookupTerm('footer', footerToLookup);
    };
  });
