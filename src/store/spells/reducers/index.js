import {
  SPELLS_GET_START,
  SPELLS_GET_SUCCESS,
  SPELLS_GET_ERROR,
  SPELLS_CREATE_START,
  SPELLS_CREATE_SUCCESS,
  SPELLS_CREATE_ERROR,
  SPELLS_UPDATE_START,
  SPELLS_UPDATE_SUCCESS,
  SPELLS_UPDATE_ERROR,
  SPELLS_DELETE_START,
  SPELLS_DELETE_SUCCESS,
  SPELLS_DELETE_ERROR,
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

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  let data;

  switch (type) {
    case SPELLS_GET_START:
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
    case SPELLS_GET_SUCCESS:
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
    case SPELLS_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case SPELLS_CREATE_START:
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
    case SPELLS_CREATE_SUCCESS:
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
    case SPELLS_CREATE_ERROR:
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
    case SPELLS_UPDATE_START:
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
    case SPELLS_UPDATE_SUCCESS:
      data = state.data.map((spell) => {
        if (spell.id !== payload.id) {
          return spell;
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
        isUpdated: true,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case SPELLS_UPDATE_ERROR:
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
    case SPELLS_DELETE_START:
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
    case SPELLS_DELETE_SUCCESS:
      data = state.data.filter((spell) => spell.id !== payload);

      return { ...state, 
        data,
        isLoading: false,
        isError: false,
        isCreated: false,
        isCreatedError: false,
        isUpdated: false,
        isUpdatedError: false,
        isDeletedError: false,
      };
    case SPELLS_DELETE_ERROR:
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
