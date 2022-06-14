import * as actions from "../actions/charactersActions";

export const initialState = {
  page: 1,
  limit: false,
  errors: false,
  loading: false,
  characters: [],
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
    case actions.GET_LIMITCHARACTERSLIST:
      return { ...state, limit: true, loading: false, errors: false };
    case actions.GET_CHARACTERS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}
