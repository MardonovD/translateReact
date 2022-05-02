import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search.js";
import RenderSearch from "./RenderSearch.js";
import "../Style.css";
import Dropdown from "./Dropdown.js";
import Accordion from "./Accordion.js";
import Translate from "./Translate.js";
import YouTube from "./YouTube.js";
import Aside from "./Aside.js";
const dataDropdown = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const dataAccordion = [
  { savol: "Ishlaring yaxshimi", javob: "zur" },
  { savol: "React qanday", javob: "oson" },
  { savol: "Qalay", javob: "zur" },
  { savol: "Qalay", javob: "zur" },
];

const dataDropTranslate = [
  { label: "Uzbek", value: "uz" },
  { label: "English", value: "en" },
  { label: "Russian", value: "ru" },
  { label: "Arabic", value: "ar" },
];

const App = () => {
  const [val, setval] = useState("");
  const [results, setResults] = useState([]);
  const [valYoutube, setValYoutube] = useState("");
  const [renderData, setRenderData] = useState([]);
  const valueKalitSuz = (v) => {
    setValYoutube(v);
  };
  // console.log(valYoutube);
  const searchOlVal = (a) => {
    setval(a);
  };

  const youtubeSearchServer = async () => {
    const key = "AIzaSyBmDL0NCyq2ZBYwgVLLOWQqAk-CcvrPUXQ";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 15,
          key: key,
          q: valYoutube,
        },
      }
    );
    setRenderData(data);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: val,
        },
      });

      setResults(data.data.query.search);

      console.log(results);
    };

    const timer = setTimeout(() => {
      if (val) {
        getData();
      } else if (!val && results.length) {
        setResults([]);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [val]);

  // console.log(val);
  return (
    <div className="app">
      <div className="ui pointing menu">
        <a className="item active">Search</a>
        <a className="item">Accordion</a>
        <a className="item">Friends</a>
        <a className="item">You-Tube</a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <div className="container-main">
          {/* <Search searchOlValProps={searchOlVal} /> */}
          {/* <RenderSearch res={results} /> */}
          {/* <Dropdown drop={dataDropdown} /> */}
          {/* <Accordion data={dataAccordion} /> */}
          {/* <Translate tarjima={dataDropTranslate} /> */}
          <YouTube
            renderY={renderData}
            val={valueKalitSuz}
            ishlaServer={youtubeSearchServer}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
