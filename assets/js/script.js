fetch(
	'https://www.reddit.com/r/wallstreetbets/hot/.json'
)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data.data.children[1].data.title);
	});
	