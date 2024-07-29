export default function Search({ country, setCountries }) {
  return (
    <div>
      <input value={country} onChange={(e) => setCountries(e.target.value)} />
    </div>
  );
}
