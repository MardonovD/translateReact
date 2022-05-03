import React from "react";

const HeaderMenu = () => {
  return (
    <div>
      <div className="ui pointing menu">
        <a href="/search" className="item active">
          Search
        </a>
        <a href="/accordion" className="item">
          Accordion
        </a>
        <a href="/weather" className="item">
          Weather
        </a>
        {/* <a className="item">Friends</a> */}
        <a href="/youtube" className="item">
          You-Tube
        </a>
        <a href="/dropdown" className="item">
          Dropdown
        </a>

        <a href="/translate" className="item">
          Translate
        </a>
        <a href="/translate" className="item">
          Unsplash
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HeaderMenu;
