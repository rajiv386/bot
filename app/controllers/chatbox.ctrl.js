'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description # MainCtrl Controller of cbapp
 */
angular
		.module('yapp')
		.controller(
				'ChatCtrl',
				function($scope, $state) {
					$scope.chatlog = "";

					$scope.$state = $state;

					$scope.sendInput = function() {

						var elem = document.getElementById("demochat");
						if (elem) {
							elem.parentNode.removeChild(elem);//
						}

						console.log("aa===", $scope.userInput)
						console.log("log===", $scope.chatlog)

						document.getElementById("chatlog").innerHTML = $scope.userInput
								+ "<br>"
								+ document.getElementById("chatlog").innerHTML
						$scope.chatlog = $scope.userInput + "\n\r "
								+ $scope.chatlog;

						if ($scope.userInput == '') {

							document.getElementById("chatlog").innerHTML = "<b>ChatBot:</b> You entered nothing."
									+ "<br>"
									+ document.getElementById("chatlog").innerHTML
							$scope.chatlog = "<b>ChatBot:</b> Howdy!" + "\n "
									+ $scope.chatlog;

						}
						else if ($scope.userInput == 'hi') {

							document.getElementById("chatlog").innerHTML = "<b>ChatBot:</b> Howdy!"
									+ "<br>"
									+ document.getElementById("chatlog").innerHTML
							$scope.chatlog = "<b>ChatBot:</b> Howdy!" + "\n "
									+ $scope.chatlog;

						} else if ($scope.userInput == 'name') {

							document.getElementById("chatlog").innerHTML = "<b>ChatBot:</b> My name is Chatbot"
									+ "<br>"
									+ document.getElementById("chatlog").innerHTML
							$scope.chatlog = "<b>ChatBot:</b> My name is Chatbot"
									+ "\n " + $scope.chatlog;

						} else {

							document.getElementById("chatlog").innerHTML = "<b>ChatBot:</b> I'm confused"
									+ "<br>"
									+ document.getElementById("chatlog").innerHTML
							$scope.chatlog = "<b>ChatBot:</b> I'm confused"
									+ "\n " + $scope.chatlog;

						}

						$scope.userInput = "";

					}

					/*
					 * $scope.list_of_files = ['File1', 'File2', 'File3',
					 * 'File4'];
					 */
				});
