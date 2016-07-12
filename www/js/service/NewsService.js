app.service('NewsService', function($http) {

  return {

    endpointUrl: 'http://localhost:8888/news/',

    selectedNews: {},

    loadNews: function() {

        return $http.get(this.endpointUrl);

    },

    signIn: function(user, pass) {
      var signInUrl = this.endpointUrl + 'signin';

      var postObject = {
        username: user,
        password: pass
      };
      var postBody = angular.toJson(postObject);
      console.dir(postBody);
      return $http.post(signInUrl, postBody);
    }

  };
})
