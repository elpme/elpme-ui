var app = angular.module("elpme_GMD");
app.service("elpme_GSV", [
    'elpme_GST',
    function (cnst) {
      var _that = this,
        _globalConstant = angular.copy(cnst);

      this.getCategoryList = _getCategoryList;

      function _getCategoryList() {
        return _globalConstant.categoryObj
      }

      console.log("global-service loaded properly");

    }]);
