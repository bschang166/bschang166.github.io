'use strict';

/**
 * @ngdoc filter
 * @name hpApp.filter:groupby
 * @function
 * @description
 * # groupby
 * Filter in the hpApp.
 */
angular.module('hpApp')
  .filter('groupBy', function () {
    return function (items, groupByNum) {
      if (items){
        var resultGroup = [];
        var currentGroup = [];

        for (var i = 0; i< items.length; i++){
          currentGroup.push(items[i]);

          if ( ((i+1)%groupByNum) === 0){
            resultGroup.push(currentGroup);
            currentGroup = [];
          }
        }
        if (currentGroup.length > 0){
          resultGroup.push(currentGroup);
        }
        return resultGroup;
      }
    };
  });
