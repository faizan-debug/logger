import { combineReducers } from "redux";
import logReducer from "./logReducer";
import developerReducer from "./developerReducer";

const rootReducer = combineReducers({
    log: logReducer,
    developer: developerReducer
});

export default rootReducer;