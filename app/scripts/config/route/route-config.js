angular.module('elpme_RouteCSTMD', ['ui.router']).config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: '../../../views/home/home.html',
        controller: 'elpme_HomeCT'
      })
      .state('selectLocation', {
        url: "/select-location",
        templateUrl: '../../../views/select-location/select-location.html',
        controller: 'elpme_SelectLocationCT'
      })
      .state('add-service', {
        url: "/add-service",
        templateUrl: '../../../views/add-service/add-service.html',
        controller: 'elpme_AddServiceCT'
      })
    $urlRouterProvider.otherwise("/home");
  }
]);