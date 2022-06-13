import { combineReducers } from "redux";
//Reducers
import charactersReducer from "./charactersReducer";
import characterDetailReducer from "./characterDetailReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  characterDetail: characterDetailReducer,
});

export default rootReducer;
