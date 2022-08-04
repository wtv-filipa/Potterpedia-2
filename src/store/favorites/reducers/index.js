import {
  FAVORITE_GET_START,
  FAVORITE_GET_SUCCESS,
  FAVORITE_GET_ERROR,
  FAVORITE_CREATE_SUCCESS,
  FAVORITE_CREATE_ERROR,
  FAVORITE_DELETE_SUCCESS,
  FAVORITE_DELETE_ERROR,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FAVORITE_GET_SUCCESS:
      return {
        data: [...state.data, payload],
        isLoading: false,
        isError: false,
      };
    case FAVORITE_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FAVORITE_CREATE_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        isError: false,
      };
    case FAVORITE_CREATE_ERROR:
      return {
        ...state,
        data: [...state.data, payload],
        isError: true,
      };
    case FAVORITE_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          ({ nameCharacter }) => nameCharacter !== payload
        ),
        isError: false,
      };
    case FAVORITE_DELETE_ERROR:
      return {
        ...state,
        data: state.data.filter(
          ({ nameCharacter }) => nameCharacter !== payload
        ),
        isError: true,
      };
    default:
      return state;
  }
};
