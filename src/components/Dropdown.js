import React, { useRef, useState, useEffect } from "react";

const Dropdown = (props) => {
  const [selection, setSelection] = useState(props.drop[0]);

  const [check, setCheck] = useState(true);

  // useEffect(() => {
  //   setSelection(props.dataDropdown);
  // }, [selection]);
  console.log(props);

  const renderData = () => {
    return props.drop.map((val) => {
      if (val.value == selection.val) {
        return;
      }
      return (
        <div
          onClick={() => {
            setSelection(val);
          }}
          className="item"
          data-value="jenny"
          key={val.value}
        >
          {val.label}
        </div>
      );
    });
  };

  const ref = useRef();

  return (
    <div className="ui container">
      {/* <h1>{props.label}</h1> */}
      <div
        onClick={() => {
          setCheck(!check);
        }}
        className={`ui fluid selection dropdown ${
          check ? "active visible" : ""
        } `}
      >
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{selection.label}</div>
        <div className={`menu ${check ? "transition visible" : ""}`}>
          {renderData()}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

//transition visible
//active visible
