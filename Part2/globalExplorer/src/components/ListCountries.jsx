export default function ListCountries({
  countries,
  setCountryData,
  setViewCardCountry,
  viewCardCountry,
}) {
  const openCardCountry = (elem) => {
    setViewCardCountry(!viewCardCountry);
    setCountryData(elem);
  };
  return (
    <div>
      {countries?.map((elem) => {
        return (
          <div key={elem.name.official}>
            <button onClick={() => openCardCountry(elem)}>
              {elem.name.common} 🔍
            </button>
          </div>
        );
      })}
    </div>
  );
}
