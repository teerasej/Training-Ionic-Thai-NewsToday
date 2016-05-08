app.controller('DetailController', ['$scope','$stateParams', function($scope, $stateParams){
	$scope.title = $stateParams.title;
}])