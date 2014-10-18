'use strict';

/**
 * @ngdoc service
 * @name hpApp.utilityService
 * @description
 * # utilityService
 * Service in the hpApp.
 */
angular.module('hpApp')
  .service('utilityService', function utilityService($q) {
    var isImage = function(src) {

      var deferred = $q.defer();

      var image = new Image();
      image.onerror = function() {
        deferred.reject('Image not found : ' + src);
      };
      image.onload = function() {
        deferred.resolve('Image found : ' + src);
      };
      image.src = src;

      return deferred.promise;
    };

    return {
      isImage : isImage
    };
  });
