import axios from "axios";

//Actions type
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_OK = "GET_CHARACTERS_OK";
export const GET_LIMITCHARACTERSLIST = "GET_LIMITCHARACTERSLIST";
export const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

//Action creators
export const actionGetCharacters = () => ({
  type: GET_CHARACTERS,
});

export const actionGetCharactersOk = (characters, page, totalPage) => ({
  type: GET_CHARACTERS_OK,
  payload: { characters, page, totalPage },
});

export const actionLimitCharactersList = () => ({
  type: GET_LIMITCHARACTERSLIST,
});

export const actionGetCharactersError = () => ({
  type: GET_CHARACTERS_ERROR,
});

export function getCharacters(page) {
  return async (dispatch) => {
    dispatch(actionGetCharacters());
    try {
      const endPoint = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=" + page;
      const res = await axios.get(endPoint);
      if (res && res.status && res.status === 200) {
        dispatch(actionGetCharactersOk(res.data.results, res.data.current, res.data.total));
        if ((page === 0) || (page === 20)) {
          dispatch(actionLimitCharactersList());
        }
      } else {
        dispatch(actionGetCharactersError());
      }
    } catch (err) {
      console.error(err);
      dispatch(actionGetCharactersError());
    }
  };
}
