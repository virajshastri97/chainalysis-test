import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <div className="exName" id="top">Binance</div>
        <div className="exName" id="bottom">Coinbase</div>
        <div className="coinName" id="left">
          <Prices prices={ this.props.btcBin } />
          <Prices prices={ this.props.btcCnb } />
        </div>
        <div className="coinName" id="right">
          <Prices prices={ this.props.ethBin } />
          <Prices prices={ this.props.ethCnb } />
        </div>
      </Fragment>
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
