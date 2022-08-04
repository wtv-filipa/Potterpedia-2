import { SET_TOKEN } from '../actions/constants'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_TOKEN:
      return payload;
    default:
      return state;
  }
}