app.service('NewsService', function($http){

	return {

		url: 'http://localhost:8888/news/',

		selectedNews: {},

		loadNews : function(callBackFunction, count){

			console.log('Going to call Web API');

			if(count && count > 0){
				console.info('Not implemented');
			} else {
				console.info('Accessing ' + this.url);

				$http.get(this.url)
					.success(function(data){
						console.dir(data);
						callBackFunction(data);
					})
					.error(function(error){
						console.error('Error');
					})
			}
		}
	};
})