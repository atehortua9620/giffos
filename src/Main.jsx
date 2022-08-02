import React, { useState, useEffect } from "react";
import "./styles/main.css";
import ban from "./Assets/ilustra_header.svg";
import icon from "./Assets/icon-search-mod-noc.svg";
import lupan from "./Assets/lupa.png";
/* import search from './Assets/ilustra_header.svg'; */

export default function MainZone(props) {
  const {
    darkButon,
    setdarkButon,
    search,
    setsearch,
    setdata,
    setranding,
    setContact
  } = props;
  const [clicking, setClicling] = useState(false);
  const [autoCompl, setautoCompl] = useState([]);

  const ApiKey = "ThNf7FKyr7inmfAPvUoU84Yila7lAIB5";
  const handleSearch = async (e) => {
    e.preventDefault();
    const respuesta = await fetch(
      `https://api.giphy.com/v1/stickers/search?&api_key=${ApiKey}&q=${search}`
    );

    const { data } = await respuesta.json();
    setdata(data);
    setsearch("");
    setContact(true);
  };

  useEffect(() => {
    const trend = async () => {
      const respuesta = await fetch(
        `https://api.giphy.com/v1/stickers/trending?&api_key=${ApiKey}`
      );
      const { data } = await respuesta.json();
      setranding(data);
    };
    trend();
  }, []);

  useEffect(() => {
    const autoComp = async () => {
      const respComp = await fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=${ApiKey}&q=${search}`
      );

      const { data } = await respComp.json();
      setautoCompl(data);
      console.log("largo", autoCompl);
    };
    autoComp();
  }, [search]);

  return (
    <div className={darkButon === true ? "main" : "darkM"}>
      <h1>
        !inspire and looking for the best{" "}
        <span className="subrayado">GIFS¡</span>
      </h1>
      <img className=" banerim" src={ban} alt="ban"></img>
      <div className="barcontainer">
        <input
          placeholder=" search gifs"
          className="input"
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
            console.log(e.target.value, "search");
          }}
        ></input>
        <button onClick={handleSearch} id="butt" className="buttonaction">
          <img src={icon} alt="looking"></img>
        </button>
      </div>

      <div className="preCont">
        {autoCompl.length > 0
          ? autoCompl.map((item) => {
              return (
                <div className="predict">
                  <img className="lupa" src={lupan} alt="lupa"></img>
                  <h2>{item.name}</h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
