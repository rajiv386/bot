'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl',['$scope','$location', 'loginService', LoginCtrl]);
function LoginCtrl($scope, $location,loginService) {

    $scope.submit = function() {
    	localStorage.setItem("loggeduser", $scope.loginuserid);
    	console.log($scope.loginuserid, $scope.loginpassword);

      var dataObj = {
        "email": $scope.loginuserid,
        "password":$scope.loginpassword
      };

      console.log(dataObj);

/*      loginService.loginUser(dataObj).then(function(response){
        console.log("in get controller");
      });*/


      loginService.loginUser(dataObj).then(function (response) {
        console.log("in login controller");
   /*     $rootscope.loginToken = response.data;
*/
/*
        sessionStorage.setItem("loginToken", $rootscope.loginToken);
*/

        console.log("aaa", response.data);
        console.log("bbb", response.data.token);



      });



      $location.path('/dashboard');

      return false;
    }

  }
