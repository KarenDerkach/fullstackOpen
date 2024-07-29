import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import fetches from "./services/fetches";
import Country from "./components/Country";
import ListCountries from "./components/ListCountries";

function App() {
  const [countries, setCountries] = useState(null);
  const [newCountry, setNewCountry] = useState(null);
  const [country, setCountryData] = useState(null);
  const [viewCardCountry, setViewCardCountry] = useState(false);

  useEffect(() => {
    fetches.getAllCountry().then((data) => {
      const filterCountry = data.filter((elem) =>
        elem?.name?.common.toLowerCase().includes(newCountry?.toLowerCase())
      );
      return setCountries(filterCountry);
    });
  }, [newCountry]);

  return (
    <>
      <header>
        <h1>GLOBAL EXPLORER</h1>
      </header>
      <section>
        <Search countries={newCountry} setCountries={setNewCountry} />
      </section>
      <section>
        {!newCountry ? (
          <h4>Search name of the country ⬆️ </h4>
        ) : countries?.length > 10 ? (
          <p>Too many matches, especify another filter</p>
        ) : countries?.length === 1 ? (
          <section>
            {" "}
            <Country data={countries[0]} />
          </section>
        ) : (
          <>
            {" "}
            <h3>List of Countries</h3>
            <ListCountries
              countries={countries}
              setCountryData={setCountryData}
              setViewCardCountry={setViewCardCountry}
              viewCardCountry={viewCardCountry}
            />
            {viewCardCountry && <Country data={country} />}
          </>
        )}
      </section>
    </>
  );
}

export default App;
