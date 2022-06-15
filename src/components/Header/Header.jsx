//React
import React from "react";
import { Link } from "react-router-dom";
//Imports
import Oompa from "../../assets/images/icons/oompa-icon.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="b-header d-flex align-items-center">
      <Link to="/">
        <img className="b-header__img" src={Oompa} alt="oompa-icon" />
      </Link>
      <p className="m-0 b-header__txt text-nowrap">Oompa Loompa's crew</p>
    </div>
  );
}
