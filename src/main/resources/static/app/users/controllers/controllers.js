"use strict";

var ctrlModule = angular.module('userCtrlModule',['userSrvcModule',
                                                  'addUserModalCtrlModule',
                                                  'updateUserModalCtrlModule']);

ctrlModule.controller ('userCtrl',['$scope',
                                   'usersFactory',
                                   '$uibModal',
                                   '$log',
                                   function($scope, usersFactory, $uibModal, $log){
	
	$scope.newUser;

	usersFactory.query(function (response){
		$scope.users = response ? response : [];
	});
	
	$scope.addUser = function(){
		new usersFactory($scope.newUser).$save(function (user){
			$scope.users.push(user);
			$scope.newUser = null;
		});
	};
	
	$scope.updateUser = function(user) {
		user.$update();
	};
	
	 $scope.deleteUser = function(user) {
	      user.$remove(function() {
	        $scope.users.splice($scope.users.indexOf(user), 1);
	      });
	    };
	
	$scope.openAddUserModal = function (size){
		var modalInstance = $uibModal.open({
			templateUrl: '/app/users/templates/addUserModal.html',
			controller: 'addUserModalCtrl',
			size: size,
			resolve: {
				Items: function (){
					return {
						newUser: $scope.newUser
					}
				}
			}
		});
		
		modalInstance.result.then(function (newUser) {
		      $scope.newUser = newUser;
		      $scope.addUser($scope.newUser);
		    }, function () {
		      $log.debug('Modal Add user dismissed at: ' + new Date());
		    });
		
	};
	
	$scope.updateUserModal = function (size, user){
		var modalInstance = $uibModal.open({
			templateUrl: '/app/users/templates/updateUserModal.html',
			controller: 'updateUserModalCtrl',
			size: size,
			resolve: {
				Items: function (){
					return {
						updateUser: user
					}
				}
			}
		});
		
		modalInstance.result.then(function (updateUser) {
		      $scope.updateUser(updateUser);
		    }, function () {
		      $log.debug('Modal update user dismissed at: ' + new Date());
		    });
		
	};
	
}]);