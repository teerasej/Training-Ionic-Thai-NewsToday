app.controller('MasterController', ['$scope','$state', function($scope, $state){
	
	$scope.news = [
		{title:'A', imageUrl:'', createdDate: new Date(), content:'blah blah blah'},
		{title:'B', imageUrl:'', createdDate: new Date(), content:'blah blah blah'},
		{title:'C', imageUrl:'', createdDate: new Date(), content:'blah blah blah'}
	];

	$scope.showDetail = function(newsItem){
		// console.log(newsItem.title);
		$state.go('detail', { title: newsItem.title });
	}

}])