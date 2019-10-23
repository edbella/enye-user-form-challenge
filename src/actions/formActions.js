import { SAVE_FORM } from "./types";

export const saveForm = user => {
  return {
    type: SAVE_FORM,
    payload: user
  };
};
