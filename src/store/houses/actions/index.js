import {
  HOUSES_GET_START,
  HOUSES_GET_SUCCESS,
  HOUSES_GET_ERROR
} from './constants';
import {
  fetchHouses,
} from "../../../api/houses";

/*ir buscar*/
export const getHouses = () => {
  return (dispatch) => {
    dispatch({ type: HOUSES_GET_START });

    fetchHouses()
      .then((houses) => {
        dispatch({ type: HOUSES_GET_SUCCESS, payload: houses });
      })
      .catch(() => dispatch({ type: HOUSES_GET_ERROR }));
  };
};