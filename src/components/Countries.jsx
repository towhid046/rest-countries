/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Country from "./Country";
import "../App.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setCountries(
        data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      );
    };
    loadData();
  }, []);

  const handelMarkVisited = (country, setIsVisited2) => {
    setVisitedCountries([...visitedCountries, country]);
    const filteredCountries = countries.filter(
      (c) => c.name.common !== country.name.common
    );
    setCountries(filteredCountries);
  };

  const countriesTitleStyle = { textAlign: "center", fontFamily: "Arial" };

  return (
    <>
      <h1 style={countriesTitleStyle}>Visited countries Lengths {visitedCountries.length}</h1>
      <ul className="countries-container">
        {visitedCountries.map((v) => (
          <Country key={v.name.common} country={v} />
        ))}
      </ul>

      <h1 style={countriesTitleStyle}>
        Length of the Countries: {countries.length}
      </h1>

      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelMarkVisited={handelMarkVisited}
          />
        ))}
      </div>
    </>
  );
}
