// quandl API Key "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=CUsBpcdJn44R3yo3aahR"

// reddit wallstreet API Key  curl -XGET 'https://dashboard.nbshare.io/api/v1/apps/reddit'


//var redditFormElement = document.querySelector("#user-form");
//var redditContainerElement = document.querySelectorI("#tested");
//var tickerInputElement = document.querySelector("#user-input")

var apiKEY = "CUsBpcdJn44R3yo3aahR";

var getQuandl = function() {
    var quandlAPI = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL/data.json?api_key=" + apiKEY;
    fetch(quandlAPI)
    .then(function(response) {
        if (response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data)
                //displayTickers();
        });
    } else {
        alert("Error, please submit a valid ticker");
    }
    });
};