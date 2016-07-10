app.controller('DetailController', ['$scope','$stateParams', 'NewsService' , function($scope, $stateParams, NewsService) {

    $scope.newsItem = NewsService.selectedNews;

}])
