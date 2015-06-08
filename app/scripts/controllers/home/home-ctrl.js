'use strict';

angular.module('elpme_HomeMD')
  .controller('elpme_HomeCT', [
    '$scope',
    'elpme_GSV',
    function ($scope, globalService) {

      console.log("Home controller loaded successfully");

      $scope.categoryList = globalService.getCategoryList();

      console.log("Category List fetched successfully : ", $scope.categoryList);

    }]);
