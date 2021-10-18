const Prices = (props) => (
  <div>
    <div className="buy">{props.prices.buy}</div>
    <div className="sell">{props.prices.sell}</div>
  </div>
);

export default Prices;
