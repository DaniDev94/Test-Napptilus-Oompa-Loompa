import axios from "axios";

//Actions type
export const GET_CHARACTERDETAIL = "GET_CHARACTERDETAIL";
export const GET_CHARACTERDETAIL_OK = "GET_CHARACTERDETAIL_OK";
export const GET_CHARACTERDETAIL_ERROR = "GET_CHARACTERDETAIL_ERROR";

//Action creators
export const actionGetCharacterDetail = () => ({
  type: GET_CHARACTERDETAIL,
});

export const actionGetCharacterDetailOk = (characterDetail) => ({
  type: GET_CHARACTERDETAIL_OK,
  payload: characterDetail,
});

export const actionGetCharacterDetailError = () => ({
  type: GET_CHARACTERDETAIL_ERROR,
});


export function getCharactersDetail(characterId) {
  return async (dispatch) => {
    dispatch(actionGetCharacterDetail());
    try {
      const endPoint = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/" + characterId;
      const res = await axios.get(endPoint);
      dispatch(actionGetCharacterDetailOk(res));
    } catch (err) {
      console.error(err);
      dispatch(actionGetCharacterDetailError());
    }
  };
}
