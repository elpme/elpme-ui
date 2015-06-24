var app = angular.module("elpme_ClientStoreSVMD");
app.service('elpme_ClientStoreSV', function () {

  this.get = function (key) {
    return window.localStorage[key];
  };

  this.set = function (key, value) {
    if (value && typeof value !== "string") {
      value = JSON.stringify(value);
    }
    try {
      window.localStorage[key] = value;
    } catch (ex) {
    }
  };

  this.remove = function (key) {
    delete window.localStorage[key];
  };

  this.init = function () {
    console.log("Storage service initialized");
  };

  this.init();

});
