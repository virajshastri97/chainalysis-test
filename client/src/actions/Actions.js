import { GET_CURRENT_BOOK } from './types';
import axios from "axios";

export const getCurrentBook = () => async (dispatch) => {
  let ethBin = { "buy": 0, "sell": 0};
  let ethCnb = { "buy": 0, "sell": 0};
  let btcBin = { "buy": 0, "sell": 0};
  let btcCnb = { "buy": 0, "sell": 0};

  const book = await axios.get('/api');

  book.data.forEach((item) => {
    if (item.exchange === 'Binance' && item.coin === 'ETH') ethBin = { "buy": item.buy, "sell": item.sell };
    else if (item.exchange === 'Coinbase' && item.coin === 'ETH') ethCnb = { "buy": item.buy, "sell": item.sell };
    else if (item.exchange === 'Binance' && item.coin === 'BTC') btcBin = { "buy": item.buy, "sell": item.sell };
    else btcCnb = { "buy": item.buy, "sell": item.sell };
  });

  dispatch({
    type: GET_CURRENT_BOOK,
    payload: { ethBin: ethBin, ethCnb: ethCnb, btcBin: btcBin, btcCnb: btcCnb }
  });
};
