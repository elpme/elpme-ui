'use strict';

/**
 * @ngdoc overview
 * @name elpme
 * @description
 * # elpme
 *
 * Main module of the application.
 */
(function () {
  var app = angular.module('elpme_GMD', [
    'elpme_SharedDataMD',
    'elpme_RouteCSTMD',
    'elpme_HomeMD',
    'elpme_SelectLocationMD',
    'elpme_AddServiceMD',
    'elpme_CoreServiceMD',
    'elpme_ClientStoreSVMD'
  ]).config([
    '$compileProvider',
    '$filterProvider',
    function ($compileProvider, $filterProvider) {
      app.compileProvider = $compileProvider;
      app.filterProvider = $filterProvider;
    }])
}());
