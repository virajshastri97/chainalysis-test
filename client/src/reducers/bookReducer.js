import { GET_CURRENT_BOOK } from '../action/types';

const initialState = {
  book: null
};

export default function (state=initialState, action) {
  switch (action.type) {
    case GET_CURRENT_BOOK:
      return {
        ...state,
        book: action.payload.book
      };
    default:
      return state;
  }
}
