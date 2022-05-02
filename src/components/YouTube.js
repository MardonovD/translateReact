import React from "react";
import Header from "./Header.js";
import Aside from "./Aside.js";
import RenderYoutubeSearch from "./RenderYoutubeSearch.js";
const YouTube = (props) => {
  return (
    <div className="youtube">
      <Header valH={props.val} ishlaServeryoutube={props.ishlaServer} />
      <div className="view">
        <Aside />
        <RenderYoutubeSearch videoIdAppRender={props.videoIdApp} renderYoutube={props.renderY} />
      </div>
    </div>
  );
};

export default YouTube;
