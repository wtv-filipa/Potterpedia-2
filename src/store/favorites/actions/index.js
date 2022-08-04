import {
  FAVORITE_GET_START,
  FAVORITE_GET_SUCCESS,
  FAVORITE_GET_ERROR,
  FAVORITE_CREATE_START,
  FAVORITE_CREATE_SUCCESS,
  FAVORITE_CREATE_ERROR,
  FAVORITE_DELETE_START,
  FAVORITE_DELETE_SUCCESS,
  FAVORITE_DELETE_ERROR,
} from "./constants";
import {
  fetchFavorites,
  createFavorites,
  deleteFavorites,
} from "../../../api/favorites";

export const getFavorite = (name) => {
  return (dispatch, getState) => {
    dispatch({ type: FAVORITE_GET_START });

    fetchFavorites(getState().token, name)
      .then((favCharacter) => {
        dispatch({ type: FAVORITE_GET_SUCCESS, payload: favCharacter });
      })
      .catch(() => dispatch({ type: FAVORITE_GET_ERROR }));
  };
};

export const createFav = (nameCharacter = "") => {
  return (dispatch, getState) => {
    dispatch({ type: FAVORITE_CREATE_START });

    createFavorites(getState().token, nameCharacter)
      .then((favCharacter) => {
        dispatch({ type: FAVORITE_CREATE_SUCCESS, payload: favCharacter });
      })
      .catch(() => dispatch({ type: FAVORITE_CREATE_ERROR }));
  };
};

export const deleteFav = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: FAVORITE_DELETE_START });

    deleteFavorites(getState().token, id)
      .then((e) => {
        dispatch({ type: FAVORITE_DELETE_SUCCESS, payload: id });
      })
      .catch(() => dispatch({ type: FAVORITE_DELETE_ERROR }));
  };
};
