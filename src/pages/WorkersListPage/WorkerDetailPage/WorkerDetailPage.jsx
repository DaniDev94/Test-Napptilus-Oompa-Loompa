import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import oompaError from "../../../assets/images/error/oompa-error.png";
import { getCharactersDetail } from "../../../redux/actions/characterDetailActions";
import error from "../../../assets/images/error/character-error.jpg";
import "./WorkerDetailPage.scss";

const WorkersDetailPage = ({ dispatch, characterDetail, errors, loading }) => {
  const params = useParams();
  const characterId = params.characterId;
  console.log(characterDetail);

  useEffect(() => {
    dispatch(getCharactersDetail(characterId));
  }, [dispatch, characterId]);
  return (
    <>
      {loading === true ? (
        <div className="d-flex justify-content-center m-custom-loading">
          <ReactLoading type={"balls"} color={"#000000"} height={"7rem"} width={"7rem"} />
        </div>
      ) : (
        <>
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
            <div className="d-flex justify-content-center align-items-center flex-wrap m-custom">
              <div className="b-content-img">
                <img
                  className="b-content-img__img"
                  src={characterDetail.image ? characterDetail.image : error}
                  alt="not-found"
                />
              </div>
              <div class="card border-0 b-content-text">
                <div class="card-body py-2 my-1 mx-1">
                  <h3 class="card-title text-xl-start mb-2">
                    {characterDetail.first_name + " " + characterDetail.last_name}
                  </h3>
                  <p class="card-subtitle text-xl-start custom-txt">
                    {characterDetail.gender === "F" ? "Woman" : "Man"}
                  </p>
                  <p class="card-subtitle text-xl-start mb-3 custom-txt">{characterDetail.profession}</p>
                  <p
                    class="card-text text-xl-start"
                    dangerouslySetInnerHTML={{ __html: characterDetail.description }}
                  ></p>
                </div>
              </div>
              <div className="b-content-btn">
                <Link className="text-decoration-none" to={"/"}>
                  <button className="btn btn-dark b-content-btn__btn mt-1">Back</button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { characterDetail, errors, loading } = state.characterDetail;
  return {
    characterDetail,
    errors,
    loading,
  };
};

export default connect(mapStateToProps)(WorkersDetailPage);
