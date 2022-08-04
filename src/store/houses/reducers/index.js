import { 
  HOUSES_GET_START, 
  HOUSES_GET_SUCCESS,
  HOUSES_GET_ERROR 
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HOUSES_GET_START:
      return { 
        ...state, 
        isLoading: true,
        isError: false
      };
    case HOUSES_GET_SUCCESS:
      return { 
        data: payload, 
        isLoading: false,
        isError: false
      };
      case HOUSES_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
