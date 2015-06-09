var app = angular.module("elpme_SharedDataMD");
app.service("elpme_SharedDataSV",
  function () {
    var _that = this,
      _sharedData= {};

    this.setSharedData = function(data) {
      _sharedData = data;
    };

    this.getSharedData = function(){
      return _sharedData;
    };

    console.log("shared-data-service loaded properly");

  });
