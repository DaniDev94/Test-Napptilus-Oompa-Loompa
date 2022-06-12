import React from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import FilterInput from "../../components/FilterInput/FilterInput";
import "./WorkersListPage.scss";

export default function WorkersListPage() {
  return (
    <>
      <FilterInput></FilterInput>
      <div className="b-main-text">
        <h2 className="b-main-text__title m-0">Find your Oompa Loompa</h2>
        <p className="b-main-text__subtitle m-0 text-nowrap">There are more than 100K</p>
      </div>
      <div className="mt-4">
        <CharacterCard></CharacterCard>
      </div>
    </>
  );
}
