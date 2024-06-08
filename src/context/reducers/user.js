import { ADD_USER, REMOVE_USER, FOLLOW_USER, EDIT_USER } from "../action";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

export const user = (state = initialState, { payload, type }) => {
  let State;
  switch (type) {
    case ADD_USER:
      State = [...state, payload];
      localStorage.setItem("users", JSON.stringify(State));
      return State;
    case REMOVE_USER:
      State = state.filter((el) => el.id !== payload.id);
      localStorage.setItem("users", JSON.stringify(State));
      return State;
    case EDIT_USER:
      State = state.map((el) => (el.id === payload.id ? payload : el));
      localStorage.setItem("users", JSON.stringify(State));
      return State;
    case FOLLOW_USER:
      State = state.map((el) =>
        el.id === payload.id ? { ...el, follow: !el.follow } : el
      );
      localStorage.setItem("users", JSON.stringify(State));
      return State;
    default:
      return state;
  }
};
