import { GET_CURRENT_BOOK } from './types';
import axios from "axios";

export const getCurrentBook = () => async (dispatch) => {
  const book = await axios.get('/api');

  dispatch({
    type: GET_CURRENT_BOOK,
    payload: book
  });
};
