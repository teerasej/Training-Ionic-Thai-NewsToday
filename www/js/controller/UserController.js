app.controller('UserController',['$scope','NewsService','$state', function($scope, NewsService, $state){

  $scope.signIn = function(username, password){
      NewsService.signIn(username,password)
        .success(function(data){

          console.dir(data);
          if(data.result == '1'){
            $state.go('master');
          } else {
            $scope.username = "";
            $scope.password = "";
            $scope.statusMessage = "Please check your username & password, then try again.";
          }
        })
        .error(function(error){
          console.error('Error');
        })
  }


}])
