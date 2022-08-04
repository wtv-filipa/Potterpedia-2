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
} from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  isCreated: false,
  isCreatedError: false,
  isUpdated: false,
  isUpdatedError: false,
  isDeletedError: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  let data;

  switch (type) {
    case COMMENT_GET_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_GET_SUCCESS:
      return {
        data: payload,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_GET_ERROR:
      return {
        data: payload,
        isLoading: false,
        isError: true,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_CREATE_START:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        isLoading: false,
        isError: false,
        isCreated: true,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_CREATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: true,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_UPDATE_START:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_UPDATE_SUCCESS:
      data = state.data.map((comment) => {
        if (comment.id !== payload.id) {
          return comment;
        }

        return payload;
      });

      return {
        ...state,
        data,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: true,
        isDeletedError: false,
      };
    case COMMENT_DELETE_START:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_DELETE_SUCCESS:
      data = state.data.filter((comment) => comment.id !== payload);

      return {
        ...state,
        data,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case COMMENT_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: true,
      };
    default:
      return state;
  }
};
