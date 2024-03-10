/* eslint-disable react/prop-types */

import "../App.css";

export default function Country({country}) {
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

  return (
    <div className="card">
      <img style={{ width: "320px", height: "190px" }} src={png} alt={alt} />
      <h2>Name: {common}</h2>
      <h3>Official Name: {official}</h3>
      <h4>Continent: {continents}</h4>
      <h4>Capital: {capital} </h4>
      <h4>Currency: {currencyName} </h4>
    </div>
  );
}
