import React from "react";

const Iframe = () => {
  return (
    <div className="iframe">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5fiw_jJARhs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Iframe;
