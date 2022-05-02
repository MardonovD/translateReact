import React, { useEffect, useState } from "react";

const Showiframe = (props) => {
  console.log(props.idd);
  console.log(4);
  return (
    <div className={props.idd ? "iframez" : ""}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.idd}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Showiframe;
