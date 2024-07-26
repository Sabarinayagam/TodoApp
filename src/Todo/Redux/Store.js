import { createStore } from "redux";
import todoReducer from "./Reducers";
import { loadState, saveState } from "./sessionStorage";

const persistedState = loadState();
const store = createStore(todoReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
