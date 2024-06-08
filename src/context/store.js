import { combineReducers, legacy_createStore } from "redux";
import { user } from "./reducers/user";

const reducers = combineReducers({
  user,
});

export const store = legacy_createStore(reducers);
