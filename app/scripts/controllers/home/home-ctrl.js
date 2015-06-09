'use strict';

angular.module('elpme_HomeMD')
  .controller('elpme_HomeCT', [
    '$scope',
    'elpme_GSV',
    'elpme_SharedDataSV',
    function ($scope, globalService, SharedDataSV) {

      console.log("Home controller loaded successfully");

      $scope.categoryList = globalService.getCategoryList();

      console.log("Category List fetched successfully : ", $scope.categoryList);

    }]);
