app.controller('MasterController', ['$scope', '$http', '$state', function($scope, $http, $state) {

    $scope.news = [];

    $scope.loadNews = function() {

        var mockupNews = [
            {title:'A', 'createdDate': new Date(), imgUrl:'', content:'blah blah blah' },
            {title:'B', 'createdDate': new Date(), imgUrl:'', content:'blah blah blah' },
            {title:'C', 'createdDate': new Date(), imgUrl:'', content:'blah blah blah' }
        ];

        $scope.news = mockupNews;
    }

    $scope.openDetail = function(newsItem){
        $state.go('detail', { item: newsItem } )
    }



    $scope.loadNews();


}])