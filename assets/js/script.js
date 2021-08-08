// quandl API Key "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=CUsBpcdJn44R3yo3aahR"

// reddit wallstreet API Key  curl -XGET 'https://dashboard.nbshare.io/api/v1/apps/reddit'


//var redditFormElement = document.querySelector("#user-form");
//var redditContainerElement = document.querySelectorI("#tested");
// Update README

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
                //console.log(data.dataset_data);
                
                var stockClose = [data.dataset_data.data[0][4]];
                var stockDate = [data.dataset_data.data[0][0]];
                var stockHigh = [data.dataset_data.data[0][2]];
                var stockLow = [data.dataset_data.data[0][3]];
                var stockOpen = [data.dataset_data.data[0][1]];

                var hideTable = document.querySelector('.quandl-table');
                hideTable.classList.remove('hide');

                var tableDate = document.querySelector('#date');
                tableDate.textContent = stockDate;

                var tableOpen = document.querySelector('#open');
                tableOpen.textContent = stockOpen;

                var tableHigh = document.querySelector('#high');
                tableHigh.textContent = stockHigh;

                var tableLow = document.querySelector('#low');
                tableLow.textContent = stockLow;

                var tableClose = document.querySelector('#close');
                tableClose.textContent = stockClose;
            });

}

// In order to have commit
// Adding lines in order to create pull request
