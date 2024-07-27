import "./filter.css";

export default function Filter({ nameFilter, setNameFilter }) {
  return (
    <div className="container">
      By Names
      <input
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
    </div>
  );
}
