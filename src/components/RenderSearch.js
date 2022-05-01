import React from "react";

const RenderSearch = (props) => {
  return props.res.map((val) => {
    return (
      <div className="searchRender">
        <h2 className="title">{val.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>
        <p>{val.timestamp}</p>
        <a
          style={{
            padding: "5px 15px",
            background: "crimson",
            borderRadius: "5px",
            color: "white",
          }}
          href={`https://en.wikipedia.org/wiki?curid=${val.pageid}`}
        >
          click
        </a>
      </div>
    );
  });
};

export default RenderSearch;
