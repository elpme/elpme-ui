angular.module('elpme_RouteCSTMD', ['ui.router']).config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: '../../../views/home/home.html',
        controller: 'elpme_HomeCT'
      })
    $urlRouterProvider.otherwise("/home");
  }
]);