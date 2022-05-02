import React from "react";
import Header from "./Header.js";
import Aside from "./Aside.js";
import RenderYoutubeSearch from "./RenderYoutubeSearch.js";
const YouTube = () => {
  return (
    <div className="youtube">
      <Header />
      <div className="view">
        <Aside />
        <RenderYoutubeSearch />
      </div>
    </div>
  );
};

export default YouTube;
