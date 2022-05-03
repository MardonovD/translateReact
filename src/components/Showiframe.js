import React, { useEffect, useState } from "react";

const Showiframe = (props) => {
  console.log(props.iddd);

  return (
    <div className={props.iddd ? "iframes" : ""}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.iddd}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Showiframe;
