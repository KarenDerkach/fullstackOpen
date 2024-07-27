import "./notifications.css";
export default function Notifications({ message, deleted, close }) {
  if (message === null) {
    return null;
  }

  return (
    <div className="warning">
      {message}
      <div>
        <button onClick={deleted}>Ok</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}
