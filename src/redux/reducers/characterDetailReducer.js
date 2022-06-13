import * as actions from "../actions/characterDetailActions";

export const initialState = {
  characterDetail: {},
  errors: false,
  loading: false,
};

export default function characterDetailReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTERDETAIL:
      return { ...state, loading: true };
    case actions.GET_CHARACTERDETAIL_OK:
      return { ...state, characterDetail: action.payload, loading: false, errors: false };
    case actions.GET_CHARACTERDETAIL_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}
