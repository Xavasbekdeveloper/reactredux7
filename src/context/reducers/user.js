import { ADD_USER, REMOVE_USER, FOLLOW_USER, EDIT_USER } from "../action";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

export const user = (state = initialState, { payload, type }) => {
  let newState;
  switch (type) {
    case ADD_USER:
      newState = [...state, payload];
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;
    case REMOVE_USER:
      newState = state.filter((el) => el.id !== payload.id);
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;
    case EDIT_USER:
      newState = state.map((el) => (el.id === payload.id ? el : payload));
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;
    case FOLLOW_USER:
      newState = state.map((el) =>
        el.id === payload.id ? { ...el, follow: !el.follow } : el
      );
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
