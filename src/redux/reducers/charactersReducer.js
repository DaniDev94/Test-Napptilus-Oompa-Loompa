import * as actions from "../actions/charactersActions";

export const initialState = {
  characters: [],
  page: 1,
  errors: false,
  loading: false,
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return { ...state, loading: true };
    case actions.GET_CHARACTERS_OK:
      return {
        ...state,
        characters: action.payload.characters,
        page: action.payload.page,
        loading: false,
        errors: false,
      };
    case actions.GET_CHARACTERS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}
