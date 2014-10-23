'use strict';

/**
 * @ngdoc directive
 * @name hpApp.directive:githubRepo
 * @description
 * # githubRepo
 */
angular.module('hpApp')
  .directive('githubRepo', function ($modal, languageService) {
    return {
      templateUrl: 'views/directives/githubrepo.html',
      restrict: 'E',
      transclude: true,
      scope:{
        repoInfo: '='
      },
      link: function(scope, elm, attrs){
        scope.show = false;

        scope.lookupRepoTerm = function(term){
          return languageService.lookupTerm('project',term) || '';
        };

        scope.toggleText = function(){
          scope.show = !(scope.show);
        };

        scope.open = function (info, size) {
          var modalInstance = $modal.open({
            templateUrl: 'views/directives/githubrepo_thumbnailmodal.html',
            controller: 'ThumbnailModalCtrl',
            windowClass: 'github-repo-modal',
            size: size,
            resolve: {
              repoInfo : function(){
                return info;
              }
            }
          });
        };
      }
    };
  })
  .controller('ThumbnailModalCtrl', function($scope, $modalInstance,$log, utilityService, repoInfo){

    $scope.repoInfo = repoInfo;
    $scope.slides = [];

    $scope.myInterval = 5000;

    var slideCount = 0;
    var repoKey = repoInfo.id;

    var initializeSlides = function(){
      var slide = nextSlide();
      addSlide(slide);
    };
    var nextSlide = function(){
      slideCount++;
      var imageSrc = 'images/'+repoKey+'_'+slideCount+'.PNG';
      return {
        src: imageSrc
      };
    };
    var addSlide = function(slide){
      utilityService.isImage(slide.src)
        .then(function(result){
          $log.debug(result);
          $scope.slides.push({
            image: slide.src
          });
          addSlide(nextSlide());
        },
        function(result){
          $log.debug(result);
        });
    };

    initializeSlides();
  });
