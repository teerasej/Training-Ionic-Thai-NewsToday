app.service('NewsService', function($http, $ionicLoading) {

  return {

    url: 'http://localhost:8888/news/',

    selectedNews: {},

    loadNews: function(callBackFunction, count) {

      console.log('Going to call Web API');

      if (count && count > 0) {
        console.info('Not implemented');
      } else {
        console.info('Accessing ' + this.url);

        $ionicLoading.show();

        $http.get(this.url)
          .success(function(data) {
            $ionicLoading.hide();
            console.dir(data);
            callBackFunction(data);
          })
          .error(function(error) {
            $ionicLoading.hide();
            console.error('Error');
          })
      }
    }
  };
})
