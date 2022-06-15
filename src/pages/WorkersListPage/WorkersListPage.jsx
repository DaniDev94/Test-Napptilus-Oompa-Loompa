import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import FilterInput from "../../components/FilterInput/FilterInput";
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
      <FilterInput></FilterInput>
      <div className="b-main-text" id="scrollableDiv">
        <h2 className="b-main-text__title m-0">Find your Oompa Loompa</h2>
        <p className="b-main-text__subtitle m-0 text-nowrap">There are more than 100K</p>
      </div>
      <div className="my-5 d-flex flex-column">
        <CharacterCard characters={characters}></CharacterCard>
      </div>
      <div className="b-content-btn">
        {newPage <= 1 ? (
          <button className="disabled btn btn-dark b-content-btn__btn mt-1" onClick={() => setNewPage((prev) => prev - 1)}>
            Back
          </button>
        ) : (
          <button className="btn btn-dark b-content-btn__btn mt-1" onClick={() => setNewPage((prev) => prev - 1)}>
            Back
          </button>
        )}
        {newPage >= 20 ? (
          <button className="disabled btn btn-dark b-content-btn__btn mt-1" onClick={() => setNewPage((prev) => prev + 1)}>
            Next
          </button>
        ) : (
          <button className="btn btn-dark b-content-btn__btn mt-1" onClick={() => setNewPage((prev) => prev + 1)}>
            Next
          </button>
        )}
      </div>
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
