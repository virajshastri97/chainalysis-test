const path = require("path");
const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const config = {
  "headers": {
    'X-CoinAPI-Key': '68780808-E586-43F8-A871-7418F852FAD9',
    'Accept': 'application/json'
  }
};

const url = "https://rest.coinapi.io/v1/orderbooks/current?filter_symbol_id=COINBASE_SPOT_BTC_USDT,COINBASE_SPOT_ETH_USDT,BINANCE_SPOT_BTC_USDT,BINANCE_SPOT_ETH_USDT&limit_levels=1"

const symToExchangeMap = new Map();
symToExchangeMap.set("BINANCE_SPOT_ETH_USDT", "Binance");
symToExchangeMap.set("BINANCE_SPOT_BTC_USDT", "Binance");
symToExchangeMap.set("COINBASE_SPOT_ETH_USDT", "Coinbase");
symToExchangeMap.set("COINBASE_SPOT_BTC_USDT", "Coinbase");

let data = null;

const getCurrentBook = async () => {
  try {
    const res = await axios.get(url, config);
    data = res.data.map(item => ({
        "exchange": symToExchangeMap.get(item.symbol_id),
        "coin": item.symbol_id.split('_')[2],
        "buy": item.asks[0].price,
        "sell": item.bids[0].price
    }));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getCurrentBook();
setInterval(getCurrentBook, 1800000);

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.send(data);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
