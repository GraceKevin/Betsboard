// quandl API Key "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=CUsBpcdJn44R3yo3aahR"

// reddit wallstreet API Key  curl -XGET 'https://dashboard.nbshare.io/api/v1/apps/reddit'


//var redditFormElement = document.querySelector("#user-form");
//var redditContainerElement = document.querySelectorI("#tested");

var apiKEY = "CUsBpcdJn44R3yo3aahR";

document.getElementById("input")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if ( event.keyCode === 13) {
            document.getElementById("submitBtn").click();
        }
        //removeForecast();
});

var getQuandl = function() {
    var tickerInputElement = document.querySelector("#input").value;

    //var quandlAPI =;
    fetch( "https://www.quandl.com/api/v3/datasets/WIKI/" + tickerInputElement + "/data.json?api_key=" + apiKEY)
    .then(function(response) {
        if (response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data)
                //displayTickers();
        })
    } else {
        alert("Error, please submit a valid ticker");
    }
    });
};