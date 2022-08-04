import { fetchCharaters } from '../../../api/index';
import {
  CHARACTERS_FETCH_START,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_FAILURE
} from './constants';

export const getCharaters = () => {
  return dispatch => {
    dispatch({ type: CHARACTERS_FETCH_START });

    fetchCharaters()
      .then(characters => {
        dispatch({ type: CHARACTERS_FETCH_SUCCESS, payload: characters })
      })
      .catch(() => dispatch({ type: CHARACTERS_FETCH_FAILURE }))
  }
}