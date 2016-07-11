app.service('NewsService', function($http) {

  return {

    endpointUrl: 'http://localhost:8888/news/',

    selectedNews: {},

    loadNews: function(count) {

        return $http.get(this.endpointUrl);

    },

    signIn: function(user, pass) {
      var signInUrl = this.endpointUrl + 'login';

      var postObject = {
        username: user,
        password: pass
      };
      var postBody = angular.toJson(postObject);

      return $http.post(signInUrl, postBody);
    }

  };
})
