import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentBook } from '../actions/Actions';

import Prices from '../components/prices';
import Recommendation from '../components/recommendation';

class CurrentBookContainer extends Component {
  async componentDidMount() {
    await this.props.getCurrentBook();
    this.interval = setInterval(async () => {
      await this.props.getCurrentBook();
    }, 1800000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getBuySellRecommendation() {
    // 0 - Buy/Sell from any
    // 1 - Buy/Sell from Binance
    // 2 - Buy/Sell from Coinbase
    let buyBtc = 0;
    if (this.props.btcBin.buy < this.props.btcCnb.buy) buyBtc = 1;
    else if (this.props.btcBin.buy > this.props.btcCnb.buy) buyBtc = 2;

    let sellBtc = 0;
    if (this.props.btcBin.sell > this.props.btcCnb.sell) sellBtc  = 1;
    else if (this.props.btcBin.sell < this.props.btcCnb.sell) sellBtc = 2;

    let buyEth = 0;
    if (this.props.ethBin.buy < this.props.ethCnb.buy) buyEth = 1;
    else if (this.props.ethBin.buy > this.props.ethCnb.buy) buyEth = 2;

    let sellEth = 0;
    if (this.props.ethBin.sell > this.props.ethCnb.sell) sellEth = 1;
    else if (this.props.ethBin.sell < this.props.ethCnb.sell) sellEth = 2;

    return { 'buyBtc': buyBtc, 'sellBtc': sellBtc, 'buyEth': buyEth, 'sellEth': sellEth }
  }

  render() {
    const recommend = this.getBuySellRecommendation();

    return (
      <div className="book">
        <div className="coinName"><h2>Bitcoin</h2></div>
        <div className="price">
          <div className="exName">Binance</div>
          <Prices prices={ this.props.btcBin } />
        </div>
        <div className="price">
          <div className="exName">Coinbase</div>
          <Prices prices={ this.props.btcCnb } />
        </div>
        <div className="coinName"><h2>Ethereum</h2></div>
        <div className="price">
          <div className="exName">Binance</div>
          <Prices prices={ this.props.ethBin } />
        </div>
        <div className="price">
          <div className="exName">Coinbase</div>
          <Prices prices={ this.props.ethCnb } />
        </div>
        <div className="legend">
          <div>Buy for</div>
          <div>Sell for</div>
        </div>
        <Recommendation recommend={ recommend } />
      </div>
    );
  }
};

CurrentBookContainer.propTypes = {
  getCurrentBook: PropTypes.func.isRequired,
  ethBin: PropTypes.object,
  ethCnb: PropTypes.object,
  btcBin: PropTypes.object,
  btcCnb: PropTypes.object
};

const mapStateToProps = (state) => ({
  ethBin: state.book.ethBin,
  ethCnb: state.book.ethCnb,
  btcBin: state.book.btcBin,
  btcCnb: state.book.btcCnb
});

export default connect(mapStateToProps, { getCurrentBook })(CurrentBookContainer);
