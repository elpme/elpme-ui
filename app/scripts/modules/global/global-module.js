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
      'elpme_RouteCSTMD',
      'elpme_HomeMD'
    ]).config([
      '$compileProvider',
      '$filterProvider',
      function ($compileProvider, $filterProvider) {
        app.compileProvider = $compileProvider;
        app.filterProvider = $filterProvider;
      }])
}());
