import {
  COMMENT_GET_START,
  COMMENT_GET_SUCCESS,
  COMMENT_GET_ERROR,

  COMMENT_CREATE_START,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_ERROR,

  COMMENT_UPDATE_START,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_UPDATE_ERROR,

  COMMENT_DELETE_START,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_ERROR,
} from "./constants";
import {
  fetchForum,
  createComment,
  updateComment,
  deleteComment,
} from "../../../api/forum";

export const getComments = () => {
  return (dispatch) => {
    dispatch({ type: COMMENT_GET_START });

    fetchForum()
      .then((comments) => {
        dispatch({ type: COMMENT_GET_SUCCESS, payload: comments });
      })
      .catch(() => dispatch({ type: COMMENT_GET_ERROR }));
  };
};

export const createComment1 = ( body = "") => {
  return (dispatch, getState) => {
    dispatch({ type: COMMENT_CREATE_START });

    createComment(getState().token, body)
      .then((comment) => {
        dispatch({ type: COMMENT_CREATE_SUCCESS, payload: comment });
      })
      .catch(() => dispatch({ type: COMMENT_CREATE_ERROR }));
  };
};

export const updateComment1 = (id, body = "") => {
  return (dispatch, getState) => {
    dispatch({ type: COMMENT_UPDATE_START });

    updateComment(getState().token, id, body)
      .then((comment) => {
        dispatch({ type: COMMENT_UPDATE_SUCCESS, payload: comment });
      })
      .catch(() => dispatch({ type: COMMENT_UPDATE_ERROR }));
  };
};

export const deleteComment1 = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: COMMENT_DELETE_START });

    deleteComment(getState().token, id)
      .then((e) => {
        console.warn("...?", e)
        dispatch({ type: COMMENT_DELETE_SUCCESS, payload: id });
      })
      .catch(() => dispatch({ type: COMMENT_DELETE_ERROR }));
  };
};
