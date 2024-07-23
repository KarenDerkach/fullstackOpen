export default function Buttons({ onClick, text }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
