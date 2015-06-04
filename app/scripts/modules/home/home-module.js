(function () {
  var app = angular.module('elpme_HomeMD', []);

  app.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide) {
    app.controllerProvider = $controllerProvider;
    app.provide = $provide;
    app.controller = $controllerProvider.register;
    app.constant = $provide.constant;
  }]);
})();
