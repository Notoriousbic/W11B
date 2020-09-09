let ajax = new XMLHttpRequest(); 
ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        let bitCoinData = JSON.parse(this.responseText);
        let usdVal = bitCoinData.bpi.USD.rate;
        document.getElementById("bitcoin-price").innerHTML = usdVal + "USD";
    } else if (this.readyState != 4) {
        document.getElementById("bitcoin-price").innerHTML = "Loading....";
    }else {
        document.getElementById("bitcoin-price").innerHTML = "Something went wrong...";
    }
}

ajax.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
ajax.send();