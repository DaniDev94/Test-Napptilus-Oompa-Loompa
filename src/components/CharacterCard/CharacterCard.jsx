import React from "react";
import willy from "../../assets/images/willy.jpg";
import "./CharacterCard.scss";

export default function CharacterCard({image, title, gender, job}) {
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10 my-4">
          <div className="card border-0 b-content-card">
            <img className="card-img-top b-content-card__img" src={image ? image : willy} alt="not-found" />
            <div className="card-body text-md-start">
              <h3 className="card-title hover-title mt-2">{title}</h3>
              <div className="card-text">
                <p className="m-0 custom-txt">{gender}</p>
                <p className="m-0 custom-txt">{job}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
