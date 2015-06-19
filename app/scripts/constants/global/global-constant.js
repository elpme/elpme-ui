angular.module('elpme_GMD').constant('elpme_GST', {
  environmentUrls: {}, // will contain all the available environments
  env: "", // will contain the current in-use environment
  timeout: 45000,

  categoryObj: {
    "electrician": {
      label: "ELECTRICIAN",
      value: "electrician",
      icon: ""
    },
    "plumber": {
      label: "PUMBER",
      value: "plumber",
      icon: ""
    },
    "mediStore": {
      label: "MEDICAL STORE",
      value: "medicalstore",
      icon: ""
    },
    "grocStore": {
      label: "GROCERY STORE",
      value: "grocery store",
      icon: ""
    },
    "houseMaid": {
      label: "HOUSE MAID",
      value: "house maid",
      icon: ""
    },
    "vehcRepair": {
      label: "VEHICLE REPAIR",
      value: "vehicle repair",
      icon: ""
    }
  }
});