import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import FilterInput from "../../components/FilterInput/FilterInput";
import ReactLoading from "react-loading";
import oompaError from "../../assets/images/error/oompa-error.png";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/actions/charactersActions.js";
import "./WorkersListPage.scss";

const WorkersListPage = ({ dispatch, page, characters, errors, loading }) => {
  const [newPage, setNewPage] = useState(page);

  useEffect(() => {
    dispatch(getCharacters(newPage));
  }, [dispatch, newPage, page]);

  return (
    <>
      {loading === true ? (
        <div className="d-flex justify-content-center m-custom-loading">
          <ReactLoading type={"balls"} color={"#000000"} height={"7rem"} width={"7rem"} />
        </div>
      ) : (
        <div>
          {errors === true ? (
            <div className="container">
              <div className="b-api-error">
                <p className="b-api-error__txt">
                  Ups! it seems that an error has occurred, our oompa loompa's are working on it to solve it
                </p>
                <img
                  onClick={() => window.location.reload()}
                  className="b-api-error__img"
                  src={oompaError}
                  alt="oompa-error"
                />
              </div>
            </div>
          ) : (
            <>
              <FilterInput></FilterInput>
              <div className="b-main-text" id="scrollableDiv">
                <h2 className="b-main-text__title m-0">Find your Oompa Loompa</h2>
                <p className="b-main-text__subtitle m-0 text-nowrap">There are more than 100K</p>
              </div>
              <div className="d-flex flex-column m-custom-list">
                <CharacterCard characters={characters}></CharacterCard>
              </div>
              <div className="b-content-btn">
                {newPage <= 1 ? (
                  <button
                    className="disabled btn btn-dark b-content-btn__btn mt-1"
                    onClick={() => setNewPage((prev) => prev - 1)}
                  >
                    Back
                  </button>
                ) : (
                  <button
                    className="btn btn-dark b-content-btn__btn mt-1"
                    onClick={() => setNewPage((prev) => prev - 1)}
                  >
                    Back
                  </button>
                )}
                {newPage >= 20 ? (
                  <button
                    className="disabled btn btn-dark b-content-btn__btn mt-1"
                    onClick={() => setNewPage((prev) => prev + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="btn btn-dark b-content-btn__btn mt-1"
                    onClick={() => setNewPage((prev) => prev + 1)}
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { page, characters, errors, loading } = state.characters;
  return {
    page,
    characters,
    errors,
    loading,
  };
};

export default connect(mapStateToProps)(WorkersListPage);
