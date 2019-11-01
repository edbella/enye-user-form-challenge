import {
  SAVE_FORM,
  UPDATE_STORE
} from "../actions/types";

const initialState = {
  sent: [],
  db: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        sent: [action.payload]
      };
    case UPDATE_STORE:
      return {
        ...state,
        db: action.payload
      };
    default:
      return state;
  }
}