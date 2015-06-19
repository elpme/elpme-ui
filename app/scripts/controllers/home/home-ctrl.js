'use strict';

angular.module('elpme_HomeMD')
  .controller('elpme_HomeCT', [
    '$scope',
    'elpme_GSV',
    'elpme_SharedDataSV',
    "Core_SV",
    function ($scope, globalService, SharedDataSV, CoreSV) {

      console.log("Home controller loaded successfully");

      $scope.categoryList = globalService.get("categoryObj");

      console.log("Home Ctrl ::  List fetched successfully : ", $scope.categoryList);

    }]);
