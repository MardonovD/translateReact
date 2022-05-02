import React, { useState, useEffect } from "react";
import "../Style.css";

const Translate = (props) => {
  const [valTranslate, setValTranslate] = useState("");
  const [tar, setTar] = useState("");
  console.log(tar);

  const valueTranslate = (v) => {
    setValTranslate(v.target.value);
  };

  const options = () => {
    return (
      <div className="select">
        <select className="ui dropdown">
          return
          {props.tarjima.map((val) => {
            <option value={val.value}>{val.label}</option>;
          })}
        </select>
      </div>
    );
  };

  return (
    <div className="translate">
      <div className="search-container" style={{ width: "400px" }}>
        <div className="ui input focus" style={{ width: "80%" }}>
          <input
            onChange={valueTranslate}
            type="text"
            placeholder="Search..."
          />
        </div>
        {options()}
      </div>
    </div>
  );
};

export default Translate;
