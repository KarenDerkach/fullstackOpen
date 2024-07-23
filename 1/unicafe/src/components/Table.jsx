export default function Table({ text, number }) {
  return (
    <div className="row">
      <div className="name">{text}</div>
      {text === "Positive" ? (
        <div className="number">{number}%</div>
      ) : (
        <div className="number">{number}</div>
      )}
    </div>
  );
}
