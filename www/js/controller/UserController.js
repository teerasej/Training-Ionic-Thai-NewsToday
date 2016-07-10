app.controller('UserController',['$scope','NewsService', function($scope, NewsService){

  $scope.signIn = function(username, password){
      NewsService.signIn(username,password)
        .success(function(data){

          console.dir(data);

        })
        .error(function(error){
          console.error('Error');
        })
  }


}])
