/* eslint-disable react/prop-types */

import { useState } from "react";
import "../App.css";

export default function Country({ country, handelMarkVisited }) {
  const [isVisited, setIsVisited] = useState(false);
  const {
    name: { common, official },
    flags: { png, alt },
    continents,
    currencies,
    capital,
  } = country;

  let currencyName = "";

  for (let currency in currencies) {
    currencyName = currencies[currency].name;
  }

  const handelDetailsBtn = () => {
    setIsVisited((v) => !v);
  };

  return (
    <div className={isVisited ? "card bg-green" : "card"}>
      <img style={{ width: "320px", height: "190px" }} src={png} alt={alt} />
      <h2>Name: {common}</h2>
      <h3>Official Name: {official}</h3>
      <h4>Continent: {continents}</h4>
      <h4>Capital: {capital} </h4>
      <h4>Currency: {currencyName} </h4>
      <button onClick={handelDetailsBtn} className="details-btn">
        {isVisited ? "Visited" : "Not visited"}
      </button> <br /> <br />
      <button className="details-btn" onClick={()=>handelMarkVisited(country)}>Mark as visited</button>
    </div>
  );
}
