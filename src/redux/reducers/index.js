//Reducers
import charactersReducer from "./charactersReducer";
import characterDetailReducer from "./characterDetailReducer";

const rootReducer = {
  reducer: {
    characters: charactersReducer,
    characterDetail: characterDetailReducer,
  },
};

export default rootReducer;
