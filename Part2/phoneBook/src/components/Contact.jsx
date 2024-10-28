import { useState } from "react";
import fetches from "../services/fetches";
import Notifications from "./Notifications";

export default function Contact({ elem, handleDeletPerson }) {
  const [openWarning, setOpenWarning] = useState(false);

  const deleteContactById = (id) => {
    try {
      fetches.deleteContact(id).then(setOpenWarning(false));
      handleDeletPerson(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        margin: "10px",
        "background-color": "antiquewhite",
        padding: "20px",
        "border-radius": "10px",
        position: "relative",
      }}
    >
      {openWarning && (
        <Notifications
          deleted={() => deleteContactById(elem.id)}
          close={() => setOpenWarning(false)}
          message={`Do want to delete ${elem.name} from contacts?`}
        />
      )}
      <div>
        {" "}
        <b> Name:</b> {elem.name} <br /> <b>Phone:</b> {elem.number}
      </div>
      <div>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            setOpenWarning(true);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
