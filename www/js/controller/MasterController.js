app.controller('MasterController', ['$scope', '$state','NewsService', function($scope, $state, NewsService ) {

    $scope.news = [];

    $scope.loadNews = function() {
        var mockupNews = [];
        $scope.news = mockupNews;
    }

    $scope.showDetail = function(newsItem){
        NewsService.selectedNews = newsItem;
        $state.go('detail');
    }


    $scope.loadNews();


}])