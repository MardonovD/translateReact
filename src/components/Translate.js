import React, { useState, useEffect } from "react";
import "../Style.css";

const Translate = (props) => {
  const [valTranslate, setValTranslate] = useState("");
  const [tar, setTar] = useState("");
  console.log(tar);
  const valueTranslate = (v) => {
    setValTranslate(v.target.value);
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
        <div className="select">
          <select className="ui dropdown">
            <option value="">Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Translate;
