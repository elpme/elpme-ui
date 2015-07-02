var app = angular.module("elpme_GMD");
app.service("elpme_GSV", [
  'elpme_GST',
  'elpme_ClientStoreSV',
  function (cnst, ClientStoreSV) {
    var _that = this;
    _that.globalConfig = angular.copy(cnst);
    _that.get = _get;

    function _get(prop) {
      return _that.globalConfig ? _that.globalConfig[prop] : null;
    }

    console.log("global-service loaded properly");

  }]);
