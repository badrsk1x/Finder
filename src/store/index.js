import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const logger = store => {
  return next => {
    return action => {
      console.log("middleware dispatching", action);
      const result = next(action);
      console.log("middleare next state", store.getState());
      return result;
    };
  };
};

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
