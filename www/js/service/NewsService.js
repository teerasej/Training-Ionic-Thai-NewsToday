app.service('NewsService', function($http) {

  return {

    endpointUrl: 'http://localhost:8888/news/',

    selectedNews: {},

    loadNews: function(count) {

      if (count && count > 0) {
        console.info('Not implemented');
      } else {
        return $http.get(this.endpointUrl);
      }
    }
  };
})
