angular.module('app-category', ['ngRoute', 'ngAnimate'])     
    .controller('controller-categories', function($scope, $http) {
    		$http.get('http://localhost:3001/people').
        	    then(function(response) {
				    $scope.categories = response.data;
				    console.log($scope.categories);
			});
	
		});