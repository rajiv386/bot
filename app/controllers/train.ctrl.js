'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of cbapp
 */
angular.module('yapp')
  .controller('TrainCtrl', function($scope, $state) {

    $scope.$state = $state;
/*    $scope.list_of_files = ['File1', 'File2', 'File3', 'File4'];
*/
    $scope.addnewresp = function(){
    	console.log("aaaaa");
    	var parent = document.getElementById("AddResponseForm");
    	var sib = document.getElementById("addresp");
    	var child = document.createElement("input");
    	parent.appendChild(child);
    	parent.insertBefore(child,sib)
    	
    }
    $scope.showAddResponseForm= function(){
    	document.getElementById("AddResponseForm").style.visibility = "visible";
    }
    
    
  });
