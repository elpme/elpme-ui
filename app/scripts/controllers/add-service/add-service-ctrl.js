'use strict';

angular.module('elpme_AddServiceMD')
  .controller('elpme_AddServiceCT', [
    '$scope',
    'elpme_GSV',
    'elpme_SharedDataSV',
    'elpme_AddServiceCST',
    function ($scope, globalService, SharedDataSV, AddServiceCnst) {

      console.log("Add service controller loaded successfully");

      $scope.categoryList = globalService.getCategoryList();

      console.log("Add-Service Ctrl :: Category List fetched successfully : ", $scope.categoryList);

      console.log("Add-service Cnst value :: ", AddServiceCnst.tempCnst);

    }]);
