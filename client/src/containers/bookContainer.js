import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentBook } from '../actions/Actions';

import Prices from '../components/prices';

class CurrentBookContainer extends Component {
  async componentDidMount() {
    await this.props.getCurrentBook();
    this.interval = setInterval(async () => {
      await this.props.getCurrentBook();
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
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
          <div>Buy at</div>
          <div>Sell at</div>
        </div>
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
