'use strict';

/**
 * @ngdoc function
 * @name cbapp.controller:MainCtrl
 * @description # MainCtrl Controller of cbapp
 */
angular
		.module('yapp')
		.controller(
				'ChatCtrl',ChatCtrl);
				function ChatCtrl($scope, $state) {
					$scope.chatlog = "";

					$scope.$state = $state;

					$scope.sendInput = function() {

						var elem = document.getElementById("demochat");
						if (elem) {
							elem.parentNode.removeChild(elem);
						}
						// console.log("aa===", $scope.userInput)
						// console.log("log===", $scope.chatlog)

						document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
								+ "<br>"
								+ $scope.userInput
						$scope.chatlog = $scope.chatlog + "\n\r "
								+ $scope.userInput;

						if (!$scope.userInput) {

							document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
									+ "<br>"
									+ "<b>ChatBot:</b> You did not enter anything!"
							$scope.chatlog = $scope.chatlog + "\n "
									+ "<b>ChatBot:</b> You did not enter anything!";

						}
						else if ($scope.userInput == 'hi') {

							document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
									+ "<br>"
									+ "<b>ChatBot:</b> Howdy!"
							$scope.chatlog = $scope.chatlog + "\n "
									+ "<b>ChatBot:</b> Howdy!";

						} else if ($scope.userInput == 'name') {

							document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
									+ "<br>"
									+ "<b>ChatBot:</b> My name is Chatbot"
							$scope.chatlog = $scope.chatlog
									+ "\n " + "<b>ChatBot:</b> My name is Chatbot";

						} else {

							document.getElementById("chatlog").innerHTML = document.getElementById("chatlog").innerHTML
									+ "<br>"
									+ "<b>ChatBot:</b> I'm confused"
							$scope.chatlog = $scope.chatlog
									+ "\n " + "<b>ChatBot:</b> I'm confused";

						}

						$scope.userInput = "";

					}


				}
