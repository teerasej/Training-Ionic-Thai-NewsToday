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
    },

    signIn: function(user, pass) {
      signInUrl = endpointUrl + 'login';

      var postObject = {
        username: user,
        password: pass
      };

      var postBody = JSON.strigify(postBody);

      return $http.post(signInUrl, postBody);
    }

  };
})
