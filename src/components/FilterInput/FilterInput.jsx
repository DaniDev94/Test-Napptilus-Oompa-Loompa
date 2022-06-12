import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Search from "../../assets/images/icons/search-icon.png";
import "./FilterInput.scss";

export default function FilterInput(props) {
  return (
    <div className="d-flex justify-content-end mt-4 mx-5">
      <div className="col-12 col-sm-4 col-lg-2 m-custom">
        <InputGroup>
          <FormControl placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
          <InputGroup.Text id="basic-addon1" className="bg-white">
            <img src={Search} alt="search-icon" width="17" />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
}
