import React, { useState } from "react";
import "./styles/Contents.css";
import Gif from "./gif";

export default function Content(props) {
  let {
    darkButon,
    search,
    setsearch,
    dataStore,
    setdata,
    tranding,
    contact
  } = props;

  return (
    <div
      className={darkButon === true ? "contenedor_de_contenidos" : "boxGray"}
    >
      {dataStore === [] ? (
        <h1>Loading...</h1>
      ) : (
        <div className={darkButon === true ? "Box" : "boxSet"}>
          <Gif
            dataStore={dataStore}
            setdata={setdata}
            search={search}
            setsearch={setsearch}
            tranding={tranding}
            contact={contact}
          />
        </div>
      )}
    </div>
  );
}
