import {
  SAVE_FORM,
  UPDATE_STORE
} from "./types";

export const saveForm = user => {
  return {
    type: SAVE_FORM,
    payload: user
  };
};

export const updateStore = data => {
  return {
    type: UPDATE_STORE,
    payload: data
  };
};