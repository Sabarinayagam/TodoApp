import { ADD_NAME, EDIT_NAME, DELETE_NAME } from "./Action";

const initialState = {
  NameList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        NameList: [...state.NameList, action.payload],
      };
    case EDIT_NAME:
      return {
        ...state,
        NameList: state.NameList.map((name) =>
          name.id === action.payload.id
            ? { ...name, name: action.payload.name }
            : name
        ),
      };
    case DELETE_NAME:
      return {
        ...state,
        NameList: state.NameList.filter((name) => name.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
