import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import FilterInput from "../../components/FilterInput/FilterInput";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/actions/charactersActions.js";
import "./WorkersListPage.scss";

const WorkersListPage = ({ dispatch, page, limit, errors, loading, characters }) => {
  //Hooks
  const [newPage, setNewPage] = useState(page);

  console.log(limit)

  useEffect(() => {
    dispatch(getCharacters(newPage));
  }, [dispatch, newPage]);

  return (
    <>
      <FilterInput></FilterInput>
      <div className="b-main-text" id="scrollableDiv">
        <h2 className="b-main-text__title m-0">Find your Oompa Loompa</h2>
        <p className="b-main-text__subtitle m-0 text-nowrap">There are more than 100K</p>
      </div>
      <div className="mt-5">
        <CharacterCard characters={characters}></CharacterCard>
        <button onClick={() => setNewPage((prev) => prev + 1)}>Next</button>
        <button onClick={() => setNewPage((prev) => prev - 1)}>Back</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { page, limit, errors, loading, characters } = state.characters;
  return {
    page,
    limit,
    errors,
    loading,
    characters,
  };
};

export default connect(mapStateToProps)(WorkersListPage);
