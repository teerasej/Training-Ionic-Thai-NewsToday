app.controller('MasterController', ['$scope', '$state', 'NewsService', '$ionicLoading', function($scope, $state, NewsService, $ionicLoading) {

  $scope.news = [];

  $scope.loadNews = function() {

    $ionicLoading.show();

    NewsService.loadNews()
      .success(function(data) {

        $ionicLoading.hide();

        for (var i = 0; i < data.length; i++) {
          data[i].imageUrl = NewsService.endpointUrl + data[i].imageUrl;
        }
        console.dir(data);
        $scope.news = data;

      })
      .error(function(error) {
        $ionicLoading.hide();
        console.error('Error');
      })
  }

  $scope.showDetail = function(newsItem) {
    NewsService.selectedNews = newsItem;
    $state.go('detail');
  }

  $scope.loadNews();


}])
