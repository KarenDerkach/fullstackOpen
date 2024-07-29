import { useEffect, useState } from "react";
import fetches from "../services/fetches";
export default function Country({ data }) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetches
      .getWeather(data.latlng[0], data.latlng[1])
      .then((data) => setWeather(data));
  }, [data]);

  const readLanguages = (languages) => {
    const listOfLanguages = [];
    for (var language in languages) {
      listOfLanguages.push(languages[language]);
    }

    if (listOfLanguages) {
      return listOfLanguages.map((elem, i) => {
        return (
          <ul key={i}>
            <li>{elem}</li>
          </ul>
        );
      });
    }
  };

  const toCelsiusDegree = (k) => {
    return Math.floor(k - 273.15);
  };

  return (
    <div key={data.altSpellings}>
      <h3>
        {data.name?.common}, {data.region}
      </h3>
      <img src={data.flags?.png} alt={data.flags?.alt} />
      <h4>
        <b>Data</b>
      </h4>
      <ul>
        <li>Continent: {data.continents.map((elem) => elem)}</li>
        <li>Capital: {data.capital.map((elem) => elem)}</li>
        <li>Population: {data.population}</li>
        <li>Languajes: {readLanguages(data.languages)}</li>
      </ul>
      <h4>Current Weather</h4>
      <div className="card">
        {weather?.weather?.map((elem) => {
          return (
            <div key={elem.id}>
              <img
                src={`https://openweathermap.org/img/wn/${elem.icon}@2x.png`}
                alt="icon weather"
              />
              <div>{elem.main}</div>
              <div>{elem.description}</div>
            </div>
          );
        })}
        <div>
          Temperature Min : {toCelsiusDegree(weather?.main.temp_min)} °C
        </div>
        <div>
          Temperature Max : {toCelsiusDegree(weather?.main.temp_max)} °C
        </div>
      </div>
    </div>
  );
}
