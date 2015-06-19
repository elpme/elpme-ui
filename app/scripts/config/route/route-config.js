angular.module('elpme_RouteCSTMD', ['ui.router']).config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        views: {
          'header': {
            templateUrl: '../../../html/templates/header.html'
          },
          'footer': {
            templateUrl: '../../../html/templates/footer.html'
          },
          '' : {
            template : '<ui-view></ui-view>'
          }
        },
        abstract: true
      })
      .state('app.home', {
        url: "/home",
        templateUrl: '../../../html/views/home/home.html',
        controller: 'elpme_HomeCT'
      })
      .state('app.selectLocation', {
        url: "/select-location",
        templateUrl: '../../../html/views/select-location/select-location.html',
        controller: 'elpme_SelectLocationCT'
      })
      .state('app.add-service', {
        url: "/add-service",
        templateUrl: '../../../../html/views/add-service/add-service.html',
        controller: 'elpme_AddServiceCT'
      })
    $urlRouterProvider.otherwise("/home");
  }
]);
