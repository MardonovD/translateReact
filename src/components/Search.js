import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    props.searchOlValProps(searchVal);
  }, [searchVal]);
  const onchangeInp = (e) => {
    setSearchVal(e.target.value);
  };
  // console.log(searchVal);
  return (
    <div
      className="search-container"
      style={{ width: "100%", marginLeft: "130px" }}
    >
      <div className="ui input focus" style={{ width: "80%" }}>
        <input onChange={onchangeInp} type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Search;
