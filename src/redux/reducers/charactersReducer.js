import * as actions from "../actions/charactersActions";

export const initialState = {
  page: 1,
  characters: [],
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
        page: action.payload.page,
        characters: action.payload.characters,
        errors: false,
        loading: false,
        limit: false,
      };
    case actions.GET_CHARACTERS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}
