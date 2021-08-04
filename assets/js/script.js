// quandl API Key "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=CUsBpcdJn44R3yo3aahR"

// reddit wallstreet API Key  curl -XGET 'https://dashboard.nbshare.io/api/v1/apps/reddit'


//var redditFormElement = document.querySelector("#user-form");
//var redditContainerElement = document.querySelectorI("#tested");

document.getElementById("input")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
            document.getElementById("submitBtn").click();
        }
});

var getTickers  = function() {
    var redditTickers = document.querySelector("#redditBtn").value;

    fetch(
        "https://thawing-anchorage-52506.herokuapp.com/https://dashboard.nbshare.io/api/v1/apps/reddit"
        )
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                //gets the first ten tickers
                var i = 0;
                while(i < 10){
                    //stores top 10 tickers
                    var tickers = [data[i].ticker]
                    console.log(tickers)
                    i++;
                    //displays ticker list   
                    tickers.forEach(function(ticker) {
                        var redditList = document.createElement('li');
                        redditList.classList.add("li");
                        redditList.innerHTML = ticker;
                        document.getElementById('ticker-list').appendChild(redditList);
                    });
                }
            });
}
        
        

var getQuandl = function() {
    var tickerInputElement = document.querySelector("#input").value.toUpperCase();
    var apiQuandl = "CUsBpcdJn44R3yo3aahR";
    
    fetch( 
        "https://www.quandl.com/api/v3/datasets/WIKI/" + tickerInputElement + "/data.json?api_key=" + apiQuandl
        )
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                    //console.log(response);
                }
                else {
                    alert("Error, please submit a valid ticker");
                }
            })
            .then(function(data) {
                //stores closing price
                var stockPrice = [data.dataset_data.data[0][4]]
               // var stockOpen = [data.dataset_data.data[0][1]]
                //displays name and price
                stockPrice.forEach(function(price) {
                    var li = document.createElement('li');
                    li.classList.add("li");
                    li.innerHTML = tickerInputElement + '&nbsp;' + "$" + price;
                    document.getElementById('stock-price').appendChild(li);
                    console.log(stockPrice);
                    //console.log(stockOpen);
                });
                
            });

}

