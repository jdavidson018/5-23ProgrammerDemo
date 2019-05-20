import _ from "lodash";
import {
  CREATE_DOG,
  EDIT_DOG,
  DELETE_DOG,
  FETCH_DOG,
  FETCH_DOGS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_DOG:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_DOG:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_DOG:
      return _.omit(state, action.payload);
    case FETCH_DOG:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_DOGS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
