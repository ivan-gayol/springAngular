"use strict";

var ctrlModule = angular.module('updateUserModalCtrlModule',[]);

/**
 * Controller for the  add user modal window.
 * Apparently the order in witch the modules are injected is important
 */
ctrlModule.controller ('updateUserModalCtrl', ['$scope',
                                               '$uibModalInstance',
                                               'Items',
                                               function ($scope, $uibModalInstance, Items){
	$scope.updateUser = Items.updateUser;
	
	$scope.save = function (){
		$uibModalInstance.close($scope.updateUser);
	};
	
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	  };
}]);