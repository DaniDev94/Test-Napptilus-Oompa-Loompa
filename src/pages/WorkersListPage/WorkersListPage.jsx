import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import FilterInput from "../../components/FilterInput/FilterInput";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/actions/charactersActions.js";

import "./WorkersListPage.scss";

const WorkersListPage = ({ dispatch, characters, page, loading, errors }) => {
  const [newPage, setNewPage] = useState(page)
  
  useEffect(() => {
    dispatch(getCharacters(newPage));
  }, [dispatch, newPage]);

  return (
    <>
      <FilterInput></FilterInput>
      <div className="b-main-text">
        <h2 className="b-main-text__title m-0">Find your Oompa Loompa</h2>
        <p className="b-main-text__subtitle m-0 text-nowrap">There are more than 100K</p>
      </div>
      <div className="mt-5">
        <CharacterCard characters={characters}></CharacterCard>
      </div>
      <button onClick={() => setNewPage(newPage + 1)}>More</button>
      <h2>{newPage}</h2>
    </>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
  page: state.characters.page,
  errors: state.characters.errors,
  loading: state.characters.loading,
});

export default connect(mapStateToProps)(WorkersListPage);
