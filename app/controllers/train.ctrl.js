'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of cbapp
 */
angular.module('yapp').controller('TrainCtrl', TrainCtrl);
function TrainCtrl($scope, $state) {

	$scope.$state = $state;
	$scope.cnt = 1;

	/*    $scope.list_of_files = ['File1', 'File2', 'File3', 'File4'];
	 */
	$scope.addnewresp = function() {
		console.log("aaaaa");
		var parent = document.getElementById("AddResponseForm");
		var sib = document.getElementById("addresp");
		var child = document.createElement("input");

		child.setAttribute("ng-model", "inputresponse"+$scope.cnt);
		$scope.cnt += 1;

		var _br1=document.createElement("br");
		var _br2=document.createElement("br");
		parent.appendChild(child);
		parent.insertBefore(child, sib);
		parent.appendChild(_br1);
		parent.insertBefore(_br1, sib);
		parent.appendChild(_br2);
		parent.insertBefore(_br2, sib)


	}
	$scope.showAddResponseForm = function() {
		document.getElementById("AddResponseForm").style.visibility = "visible";
	}

	$scope.sendInput = function() {

		console.log($scope.inputtext);
	}


	$scope.sendNewResponses = function() {

		console.log("Counter = ",$scope.cnt);
		for(var i=0; i<$scope.cnt;i++){
			var a="inputresponse"+i

			console.log($scope[a],a);
		}

	}


}
