app.service('NewsService', function($http) {

  return {

    endpointUrl: 'http://localhost:8888/news/',

    selectedNews: {},

    loadNews: function(count) {

        return $http.get(this.endpointUrl);

    }
  };
})
