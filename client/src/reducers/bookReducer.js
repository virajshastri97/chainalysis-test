import { GET_CURRENT_BOOK } from '../actions/types';

const initialState = {
  ethBin: { "buy": 0, "sell": 0},
  ethCnb: { "buy": 0, "sell": 0},
  btcBin: { "buy": 0, "sell": 0},
  btcCnb: { "buy": 0, "sell": 0}
};

const bookReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_BOOK:
      return {
        ...state,
        ethBin: action.payload.ethBin,
        ethCnb: action.payload.ethCnb,
        btcBin: action.payload.btcBin,
        btcCnb: action.payload.btcCnb
      };
    default:
      return state;
  }
};

export default bookReducer;
