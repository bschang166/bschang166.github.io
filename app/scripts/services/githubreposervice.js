'use strict';

/**
 * @ngdoc service
 * @name hpApp.githubRepoService
 * @description
 * # githubRepoService
 * Service in the hpApp.
 */
angular.module('hpApp')
  .service('githubRepoService', function githubRepoService($rootScope, $http, $timeout, $log) {

    var repos;

    var _initializeReposData = function(){
      $http.jsonp('https://api.github.com/users/bschang166/repos' + '?callback=JSON_CALLBACK')
        .success(function(results,status){
          $log.debug('Success with status: '+status);
          $log.debug(results.data);
          repos = results.data;
          broadcastReposData();
        })
        .error(function(data,status){
          $log.debug('Error with status: '+status);
          //repos = ['There appears to be an error, please try again!'];
        });
    };
    _initializeReposData();

    var broadcastReposData = function(){
      $rootScope.$broadcast('githubRepoService.ready', repos)
    };

    var getRepos = function(callback){
      // check if repos data has been retrieved
      if (!repos){
        $log.debug('Service repos is not initialized yet, trying again...');
        $timeout(getRepos.bind(this,callback), 500);
      } else {
        callback(repos);
      }
    };

    return {
      getRepos : getRepos
    };
  });
