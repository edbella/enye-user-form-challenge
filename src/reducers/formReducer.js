import { SAVE_FORM } from "../actions/types";

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}
