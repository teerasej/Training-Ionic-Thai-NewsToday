app.controller('MasterController', ['$scope', '$state','NewsService', function($scope, $state, NewsService ) {

    $scope.news = [];

    $scope.loadNews = function() {
        NewsService.loadNews($scope.updateNews);
    }

    $scope.updateNews = function(news){

      for (var i = 0; i < news.length; i++) {
        news[i].imageUrl = "http://192.168.1.123:8888/news/" + news[i].imageUrl;
      }

        $scope.news = news;
    }

    $scope.showDetail = function(newsItem){
        NewsService.selectedNews = newsItem;
        $state.go('detail');
    }

    $scope.loadNews();


}])
