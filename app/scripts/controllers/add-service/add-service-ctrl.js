'use strict';

angular.module('elpme_AddServiceMD')
  .controller('elpme_AddServiceCT', [
    '$scope',
    '$rootScope',
    'elpme_GSV',
    'elpme_SharedDataSV',
    'elpme_AddServiceCST',
    function ($scope, $rootScope, globalService, SharedDataSV, AddServiceCnst) {

      $rootScope.hideAddServiceBtn = true;
      //TODO :: have to gor for emit and broadcast for this, and listen to that in header ctrl

      console.log("Add service controller loaded successfully");

      $scope.categoryList = globalService.get("categoryObj");

      console.log("Add-Service Ctrl :: Category List fetched successfully : ", $scope.categoryList);

      console.log("Add-service Cnst value :: ", AddServiceCnst.tempCnst);

      $scope.$on("$destroy", function() {
        $rootScope.hideAddServiceBtn = false;
      });

    }]);
