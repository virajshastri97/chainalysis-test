function getExchangeName(val) {
  if (val === 0) return 'Binance/Coinbase';
  else if (val === 1) return 'Binance';
  else return 'Coinbase';
}

const Recommendation = (props) => (
  <div className="recommend">
    <h2>Our Recommendation</h2>
    Buy Bitcoin from {getExchangeName(props.recommend.buyBtc)}<br/>
    Sell Bitcoin from {getExchangeName(props.recommend.sellBtc)}<br/><br/>
    Buy Ethereum from {getExchangeName(props.recommend.buyEth)}<br/>
    Sell Ethereum from {getExchangeName(props.recommend.sellEth)}
  </div>
);

export default Recommendation;
