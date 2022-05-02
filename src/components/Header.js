import React, { useState, useEffect } from "react";
import "../Style.css";
const Header = (props) => {
  const [value, setValue] = useState("");

  const valueFunction = (e) => {
    setValue(e.target.value);
  };
  // console.log(value);

  useEffect(() => {
    props.valH(value);
  }, [value]);

  return (
    <div className="header">
      <div className="left-Menu">
        <i className="list ol icon" id="olcham"></i>
        <div className="youtubeIcon">
          <i
            className="youtube icon color"
            style={{ color: "red", fontSize: "25px" }}
            id="olcham "
          ></i>
          <p className="youtubelorem">YOUTUBE</p>
        </div>
      </div>
      <div className="centerSearch">
        <input onChange={valueFunction} type="" placeholder="Search video.." />
        <i className="sistrix icon" id="olcham"></i>
      </div>
      <div className="right-menu">
        <i className="video icon" id="olcham"></i>
        <i className="buromobelexperte icon" id="olcham"></i>
        <i className="bell outline icon" id="olcham"></i>
        <i className="qq icon" id="olcham"></i>
      </div>
    </div>
  );
};

export default Header;

//<i class="youtube icon"></i>
