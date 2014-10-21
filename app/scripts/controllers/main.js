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

    $scope.selected = 'angular';

    var techMap = {
      javascript: {
        name : 'JavaScript',
        description: 'A dynamic programming language',
        url : 'http://en.wikipedia.org/wiki/JavaScript',
        keywords: ['JavaScript', 'language']
      },
      angular: {
        name : 'AngularJS',
        description: 'An open-source web application MVC framework for JavaScript',
        url : 'https://angularjs.org/',
        keywords: ['JavaScript', 'framework', 'angular', 'client-side', 'front-end', 'MVC']
      },
      socketio : {
        name: 'Socket.IO',
        description: 'A JavaScript library for real-time web application',
        url: 'http://socket.io/',
        keywords: ['JavaScript', 'library', 'socket.IO', 'io',
          'client-side', 'front-end', 'back-end', 'server-side', 'real-time', 'communication']
      },
      typeaheadjs: {
        name: 'Twitter Typeahead.js',
        description: 'A JavaScript library for auto completion',
        url: 'https://twitter.github.io/typeahead.js/',
        keywords: ['JavaScript', 'library', 'typeahead', 'typeaheadjs', 'autocomplete']
      },
      jquery: {
        name: 'jQuery',
        description: 'A JavaScript library for client-side scripting',
        url: 'http://jquery.com/',
        keywords: ['JavaScript', 'library', 'jquery', 'DOM', 'client-side', 'front-end']
      },
      bootstrap: {
        name: 'Twitter Bootstrap',
        description: 'A front-end framework for HTML and CSS designs with JavaScript extensions',
        url: 'http://getbootstrap.com/',
        keywords: ['JavaScript', 'framework', 'bootstrap', 'client-side', 'front-end', 'CSS','HTML']
      },
      googleMap: {
        name: 'Google Map API',
        description: 'An API for developing Google Map web applications',
        url: 'https://developers.google.com/maps/',
        keywords: ['JavaScript', 'API', 'google', 'map', 'client-side', 'front-end']
      },
      githubAPI: {
        name: 'GitHub API',
        description: 'An API for accessing GitHub resources',
        url: 'https://developer.github.com/v3/',
        keywords: ['JavaScript', 'API', 'github', 'client-side', 'front-end']
      },
      yeoman : {
        name: 'Yeoman',
        description: 'A scaffold generator of applications to speed up development',
        url: 'http://yeoman.io/',
        keywords: ['JavaScript', 'yeoman', 'generator', 'scaffold', 'angular', 'client-side', 'front-end']
      },
      grunt : {
        name: 'Grunt',
        description: 'JavaScript task runner for automation',
        url: 'http://gruntjs.com/',
        keywords: ['JavaScript', 'grunt', 'task', 'automatic', 'build', 'test', 'client-side', 'front-end']
      },
      bower : {
        name: 'Bower',
        description: 'A front-end package manager',
        url: 'http://bower.io/',
        keywords: ['JavaScript', 'bower', 'dependency', 'management', 'manager', 'client-side', 'front-end']
      },
      npm : {
        name: 'Node Package Manager',
        description: 'A package manager for Node.js',
        url: 'https://www.npmjs.org/',
        keywords: ['JavaScript', 'dependency', 'management', 'manager', 'server-side', 'back-end']
      },
      nodejs: {
        name: 'Node.js',
        description: 'An open-source runtime environment for the server-side',
        url: 'http://nodejs.org/',
        keywords: ['JavaScript', 'node.js', 'server', 'back-end']
      },
      express : {
        name : 'Express',
        description: 'A framework for Node.js',
        url: 'http://expressjs.com/',
        keywords: ['JavaScript', 'framework', 'node.js', 'server-side', 'back-end']
      },
      githubpages: {
        name : 'GitHub Pages',
        description: 'Host for webpages through GitHub',
        url: 'https://pages.github.com/',
        keywords: ['JavaScript', 'server-side', 'back-end']
      }
    };

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
