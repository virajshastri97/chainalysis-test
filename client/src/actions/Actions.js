import { GET_CURRENT_BOOK } from './types';
import axios from "axios";

export const getCurrentBook = () => async (dispatch) => {
  const book = await axios.get('/api');
  let ethBin = null;
  let ethCnb = null;
  let btcBin = null;
  let btcCnb = null;

  book.forEach((item) => {
    if (item.exchange === 'Binance' && item.coin === 'ETH') ethBin = { "buy": item.buy, "sell": item.sell };
    else if (item.exchange === 'Coinbase' && item.coin === 'ETH') ethCnb = { "buy": item.buy, "sell": item.sell };
    else if (item.exchange === 'Binance' && item.coin === 'BTC') btcBin = { "buy": item.buy, "sell": item.sell };
    else (item.exchange === 'Coinbase' && item.coin === 'BTC') btcCnb = { "buy": item.buy, "sell": item.sell };
  });

  dispatch({
    type: GET_CURRENT_BOOK,
    payload: { ethBin: ethBin, ethCnb: ethCnb, btcBin: btcBin, btcCnb: btcCnb }
  });
};
