import React from "react";
import "../Style.css";
const Aside = () => {
  return (
    <div className="aside">
      <div className="glavnaya">
        <i className="home icon " id="olcham"></i>
        <p>Glavnaya</p>
      </div>
      <div className="glavnaya">
        <i className="compass outline icon" id="olcham"></i>
        <p>Navigator</p>
      </div>
      <div className="glavnaya">
        <i className="cogs icon" id="olcham"></i>
        <p>Shorts</p>
      </div>
      <div className="glavnaya">
        <i className="share alternate icon" id="olcham"></i>
        <p>Podpiski</p>
      </div>

      <div className="line"></div>
      <div className="glavnaya">
        <i className="thumbs up outline icon" id="olcham"></i>
        <p>Kutubxona</p>
      </div>
      <div className="glavnaya">
        <i className="gift icon" id="olcham"></i>
        <p>Istoriya</p>
      </div>
      <div className="glavnaya">
        <i className="cloud download icon" id="olcham"></i>
        <p>Time</p>
      </div>
      <div className="glavnaya">
        <i className="random icon" id="olcham"></i>
        <p>Podpiska</p>
      </div>
      <div className="line"></div>
      <div className="account">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Aside;
