// quandl API Key "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=CUsBpcdJn44R3yo3aahR"

// reddit wallstreet API Key  curl -XGET 'https://dashboard.nbshare.io/api/v1/apps/reddit'


var redditFormElement = document.querySelector("#user-form");
var redditContainerElement = document.querySelectorI("#tested");
var tickerInputElement = document.querySelector("#user-input")

var apiKEY = "CUsBpcdJn44R3yo3aahR";

var tableHandler = function(event) {
    event.preventDefault();

    var tickerName = tickerInputElement.value.trim();

    if (ticker) {
        getTicker(ticker);

        console.log(ticker)
        redditFormElement = "";
        tickerInputElement.value = "";
    } else {
        alert ("Please enter a valid ticker");
    }
};

redditFormElement.addEventListener("submit", )


function getTicker (){
	fetch(
		'https://thawing-anchorage-52506.herokuapp.com/https://dashboard.nbshare.io/api/v1/apps/reddit'
	)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			var i = 0;
			while(i < 10){
				console.log(data[i].ticker)
				i++
			}
		});
};

var displayTickers = function(ticker) {
    console.log(ticker);
};

var getQuandl = function(input) {
    var quandlAPI = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL/data.json?api_key=" + apiKEY;
    fetch(quandlAPI)
    .then(function(response) {
        if (response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data)
                displayTickers();
        });
    } else {
        alert("Error, please submit a valid ticker");
    }
    });
};