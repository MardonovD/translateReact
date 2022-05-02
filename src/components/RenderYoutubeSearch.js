import React from "react";

const RenderYoutubeSearch = (props) => {
  const videoId = (val) => {
    // console.log(val);
    props.videoIdAppRender(val.id.videoId);
  };
  // console.log(props.renderYoutube.data?.items);
  const renderView = () => {
    return props.renderYoutube.data?.items.map((val) => {
      return (
        <div className="card">
          <div className="image">
            <img
              style={{ width: "100%", height: "100%" }}
              src={val.snippet.thumbnails.medium.url}
              alt="image"
            />
          </div>
          <div className="imageChannel">
            <img
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
              src={val.snippet.thumbnails.medium.url}
              alt="image"
            />
            <a
              href="#"
              onClick={(e) => {
                videoId(val);
              }}
              style={{ cursor: "pointer" }}
            >
              {val.snippet.title}
            </a>
          </div>
          <div className="descripttion">
            <p>{val.snippet.channelTitle}</p>
            <p>{val.snippet.publishTime} </p>
          </div>
        </div>
      );
    });
  };

  return <div className="renderSearchYoutube">{renderView()}</div>;
};

export default RenderYoutubeSearch;
