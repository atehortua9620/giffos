import React, { useEffect, useState } from "react";
import "./styles/giff.css";
import noF from "../src/Assets/notfound.png";

export default function Gif(props) {
  /*  const q = { search }; */
  const ApiKey = "ThNf7FKyr7inmfAPvUoU84Yila7lAIB5";
  const { dataStore, setdata, tranding, contact } = props;
  console.log("datastore", dataStore.length);
  console.log("soy contacto", contact);
  return (
    <div className="todos">
      {contact === false ? (
        dataStore.length === 0 ? (
          tranding.map((item) => {
            return (
              <a href={item.url} className="gifs" key={item.id}>
                <img src={item.images.fixed_width.url} alt={item.title} />
              </a>
            );
          })
        ) : (
          dataStore.map((item) => {
            return (
              <a href={item.url} className="gifs" key={item.id}>
                <img src={item.images.fixed_width.url} alt={item.title} />
              </a>
            );
          })
        )
      ) : dataStore.length === 0 ? (
        <div className="NotFound">
          <h1
            className="N
          otFound"
          >
            not found
          </h1>
          <img className="iconNot" src={noF} alt="not found" />
        </div>
      ) : (
        /*  <img src={noF} alt="not found"/> */
        dataStore.map((item) => {
          return (
            <a href={item.url} className="gifs" key={item.id}>
              <img src={item.images.fixed_width.url} alt={item.title} />
            </a>
          );
        })
      )}
    </div>
  );
}
