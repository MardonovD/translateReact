import React from "react";

const Dropdown = () => {
  return (
    <div className="ui container">
      <div className="ui fluid selection dropdown ">
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">Select Friend</div>
        <div className="menu ">
          <div className="item" data-value="jenny">
            Jenny Hess
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

//transition visible
//active visible
