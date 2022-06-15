import React from "react";
import error from "../../assets/images/error/character-error.jpg";
import { Link } from "react-router-dom";
import "./CharacterCard.scss";

export default function CharacterCard({ characters }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {characters.map((character) => (
          <div key={character.id} className="col-lg-4 col-md-6 col-sm-10 my-4">
            <Link className="text-decoration-none" to={`detail/${character.id}`}>
              <div className="card border-0 b-content-card">
                <img
                  className="card-img-top b-content-card__img"
                  src={character.image ? character.image : error}
                  alt="not-found"
                />
                <div className="card-body text-md-start">
                  <h3 className="card-title hover-title mt-2 text-black">{character.first_name + " " + character.last_name}</h3>
                  <div className="card-text">
                    <p className="m-0 custom-txt">{character.gender === "F" ? "Woman" : "Man"}</p>
                    <p className="m-0 custom-txt">{character.profession}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
