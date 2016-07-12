app.service('NewsService', function($http) {

  return {

    endPointUrl: 'http://localhost:8888/news/',

    selectedNews: {},

    loadNews: function() {

        return $http.get(this.endPointUrl);

    },
  };
})
