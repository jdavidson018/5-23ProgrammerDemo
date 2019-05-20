import history from "../history";
import {
  CREATE_DOG,
  EDIT_DOG,
  DELETE_DOG,
  FETCH_DOG,
  FETCH_DOGS
} from "./types";
import dogs from "../apis/dogs";

export const createDog = formValues => {
  return async (dispatch, getState) => {
    const response = await dogs.post("/dogs", { ...formValues });
    dispatch({ type: CREATE_DOG, payload: response.data });
    history.push("/");
  };
};
export const editDog = (id, formValues) => {
  return async dispatch => {
    const response = await dogs.patch(`/dogs/${id}`, formValues);
    dispatch({ type: EDIT_DOG, payload: response.data });
    history.push("/");
  };
};
export const deleteDog = id => {
  return async dispatch => {
    await dogs.delete(`/dogs/${id}`);
    dispatch({ type: DELETE_DOG, payload: id });
    history.push("/");
  };
};
export const fetchDog = id => {
  return async dispatch => {
    const response = await dogs.get(`/dogs/${id}`);
    dispatch({ type: FETCH_DOG, payload: response.data });
  };
};
export const fetchDogs = () => {
  return async dispatch => {
    const response = await dogs.get("/dogs");
    dispatch({ type: FETCH_DOGS, payload: response.data });
  };
};
