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
} from "./constants";
import {
  fetchSpells,
  createSpell,
  updateSpell,
  deleteSpell,
} from "../../../api/spells";

/*ir buscar*/
export const getSpells = () => {
  return (dispatch) => {
    dispatch({ type: SPELLS_GET_START });

    fetchSpells()
      .then((spells) => {
        dispatch({ type: SPELLS_GET_SUCCESS, payload: spells });
      })
      .catch(() => dispatch({ type: SPELLS_GET_ERROR }));
  };
};
/*criar feitiço*/
export const createSpell1 = (effect = "", spell = "", type = "") => {
  return (dispatch, getState) => {
    dispatch({ type: SPELLS_CREATE_START });

    createSpell(getState().token, effect, spell, type)
      .then((spell) => {
        dispatch({ type: SPELLS_CREATE_SUCCESS, payload: spell });
      })
      .catch(() => dispatch({ type: SPELLS_CREATE_ERROR }));
  };
};
/*editar feitiço*/
export const updateSpell1 = (id, effect = "", spell = "", type = "") => {
  return (dispatch, getState) => {
    dispatch({ type: SPELLS_UPDATE_START });

    updateSpell(getState().token, id, effect, spell, type)
      .then((spell) => {
        dispatch({ type: SPELLS_UPDATE_SUCCESS, payload: spell });
      })
      .catch(() => dispatch({ type: SPELLS_UPDATE_ERROR }));
  };
};
/*apagar feitiço*/
export const deleteSpell1 = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: SPELLS_DELETE_START });

    deleteSpell(getState().token, id)
      .then(() => {
        dispatch({ type: SPELLS_DELETE_SUCCESS, payload: id });
      })
      .catch(() => dispatch({ type: SPELLS_DELETE_ERROR }));
  };
};
