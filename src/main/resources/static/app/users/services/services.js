"use strict";

var srvcModule = angular.module('userSrvcModule', []);

srvcModule.factory('usersFactory', ['$resource', function ($resource){
	return $resource(
			'/users/:id',
			{id : '@id'},
			{
				update : {
					method :"PUT"
				},
				remove : {
					method: "DELETE"
				}
			});	
}]);