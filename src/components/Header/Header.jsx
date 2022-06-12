import React from "react";
import "./Header.scss";
import Oompa from "../../assets/images/icons/oompa-icon.png";

export default function Header() {
  return (
    <div className="b-header d-flex align-items-center">
      <img className="b-header__img" src={Oompa} alt="oompa-icon" />
      <p className="m-0 b-header__txt text-nowrap">Oompa Loompa's crew</p>
    </div>
  );
}
