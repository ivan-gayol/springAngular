"use strict";

var ctrlModule = angular.module('addUserModalCtrlModule',[]);

/**
 * Controller for the  add user modal window.
 * Apparently the order in witch the modules are injected is important
 */
ctrlModule.controller ('addUserModalCtrl', ['$scope',
                                            '$uibModalInstance',
                                            'Items',
                                            function ($scope, $uibModalInstance, Items){
	$scope.newUser = Items.newUser;
	
	$scope.save = function (){
		$uibModalInstance.close($scope.newUser);
	};
	
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	  };
}]);