app.controller('MasterController', ['$scope', '$state','NewsService', function($scope, $state, NewsService ) {

    $scope.news = [];

    $scope.loadNews = function() {
        var mockupNews = [];

        // for (var i = 0; i < data.length; i++) {
        //   data[i].imageUrl = NewsService.endPointUrl + data[i].imageUrl;
        // }

        $scope.news = mockupNews;
    }

    $scope.showDetail = function(newsItem){
        NewsService.selectedNews = newsItem;
        $state.go('detail');
    }


    $scope.loadNews();


}])
