import {
  CHARACTERS_FETCH_START,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_FAILURE
} from '../actions/constants';

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHARACTERS_FETCH_START:
      return {
        isLoading: true,
        isError: false,
        data: []
      };
    case CHARACTERS_FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: payload
      };
    case CHARACTERS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
