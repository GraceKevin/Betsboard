fetch(
	'https://thawing-anchorage-52506.herokuapp.com/https://dashboard.nbshare.io/api/v1/apps/reddit'
)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);
	});

