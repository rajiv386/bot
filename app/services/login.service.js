(function () {
  'use strict';
  angular.module('yapp').factory('loginService', loginService);
  function loginService($http) {
    return {
      loginUser: function (dataObj) {
        console.log("in login service");
        console.log(dataObj);

        return $http.post("https://reqres.in/api/login", dataObj);
      }
    }
  }
}());
