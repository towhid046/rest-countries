import { useEffect, useState } from "react";
import Country from "./Country";
import "../App.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

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

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>
        Length of the Countries: {countries.length}
      </h1>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
}
