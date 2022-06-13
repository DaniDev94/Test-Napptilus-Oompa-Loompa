import React from "react";
import willy from "../../assets/images/willy.jpg";
import "./CharacterCard.scss";

export default function CharacterCard({ characters }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {characters.map((character) => (
          <div key={character.id} className="col-lg-4 col-md-6 col-sm-10 my-4">
            <div className="card border-0 b-content-card">
              <img
                className="card-img-top b-content-card__img"
                src={character.image ? character.image : willy}
                alt="not-found"
              />
              <div className="card-body text-md-start">
                <h3 className="card-title hover-title mt-2">{character.first_name + " " + character.last_name}</h3>
                <div className="card-text">
                  <p className="m-0 custom-txt">{character.gender === "F" ? "Woman" : "Man"}</p>
                  <p className="m-0 custom-txt">{character.profession}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
