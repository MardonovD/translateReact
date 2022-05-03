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
import Showiframe from "./Showiframe.js";
import Weather from "./Weather.js";
import Header from "./Header.js";
import HeaderMenu from "./HeaderMenu.js";
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
  const [videoIdOlindi, setVideoIdOlindi] = useState("");

  // console.log(videoIdOlindi);
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

  const videoIdFunc = (id) => {
    setVideoIdOlindi(id);
  };

  const showView = () => {
    // e.preventDefault();
    if (videoIdOlindi) {
      return <Showiframe iddd={videoIdOlindi} />;
    }
  };

  ///   WEATHER
  //d161c849d306849d7d38782ca40345c3

  // const apiWeather = async () => {
  //   const dataWeather = await fetch(
  //     `https://goweather.herokuapp.com/weather/${russia}`
  //   );
  //   const malumot = await dataWeather.json();
  //   console.log(malumot);
  // };
  // apiWeather();

  const router = () => {
    if (window.location.pathname == "/search") {
      return <Search searchOlValProps={searchOlVal} />;
    } else if (window.location.pathname == "/translate") {
      return <Translate tarjima={dataDropTranslate} />;
    } else if (window.location.pathname == "/dropdown") {
      return <Dropdown drop={dataDropdown} />;
    } else if (window.location.pathname == "/") {
      return <Accordion data={dataAccordion} />;
    } else if (window.location.pathname == "/weather") {
      return <Weather data={dataAccordion} />;
    } else if (window.location.pathname == "/accordion") {
      return <Accordion data={dataAccordion} />;
    } else if (window.location.pathname == "/youtube") {
      return (
        <YouTube
          renderY={renderData}
          val={valueKalitSuz}
          ishlaServer={youtubeSearchServer}
          videoIdApp={videoIdFunc}
        />
      );
    }
  };

  // console.log(val);
  return (
    <div className="app">
      <HeaderMenu />
      <div className="ui segment">
        <div className="container-main">
          {/* <Search searchOlValProps={searchOlVal} /> */}
          {/* <RenderSearch res={results} /> */}
          {/* <Dropdown drop={dataDropdown} /> */}
          {/* <Accordion data={dataAccordion} /> */}
          {/* <Translate tarjima={dataDropTranslate} /> */}
          {/* <YouTube
            renderY={renderData}
            val={valueKalitSuz}
            ishlaServer={youtubeSearchServer}
            videoIdApp={videoIdFunc}
          />*/}
          {showView()}

          <div>{router()} </div>
        </div>
      </div>
    </div>
  );
};

export default App;
