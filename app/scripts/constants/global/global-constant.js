angular.module('elpme_GMD').constant('elpme_GST', {
  environmentUrls: {}, // will contain all the available environments
  env: "", // will contain the current in-use environment
  timeout: 45000,

  categoryObj: {
    "electrician": {
      label: "ELECTRICIAN",
      value: "electrician",
      icon: "icon-Electrician"
    },
    "plumber": {
      label: "PUMBER",
      value: "plumber",
      icon: ""
    },
    "houseMaid": {
      label: "COOK/MAID",
      value: "house maid",
      icon: "icon-Housemade"
    },
    "houseCleaning": {
      label: "PEST CONTROL/CLEANING",
      value: "house cleaning",
      icon: ""
    },
    "vehcRepair": {
      label: "VEHICLE REPAIR",
      value: "vehicle repair",
      icon: ""
    },
    "onRentService": {
      label: "ON RENTAL SERVICE",
      value: "on rent",
      icon: ""
    }
  }
});