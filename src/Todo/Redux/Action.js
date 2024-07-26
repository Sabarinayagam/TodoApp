export const ADD_NAME = "ADD_NAME";
export const EDIT_NAME = "EDIT_NAME";
export const DELETE_NAME = "DELETE_NAME";

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const editName = (id, name) => ({
  type: EDIT_NAME,
  payload: { id, name },
});

export const deleteName = (id) => ({
  type: DELETE_NAME,
  payload: id,
});
