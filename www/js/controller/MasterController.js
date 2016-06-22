app.controller('MasterController', ['$scope', '$state','NewsService', function($scope, $state, NewsService ) {

    $scope.news = [];

    $scope.loadNews = function() {
        NewsService.loadNews($scope.updateNews);
    }

    $scope.updateNews = function(news){
        console.log('Hooray! news from web api is here.');
        $scope.news = news;
    }

    $scope.showDetail = function(newsItem){
        NewsService.selectedNews = newsItem;
        $state.go('detail');
    }

    $scope.loadNews();


}])