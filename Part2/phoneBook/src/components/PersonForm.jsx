import { useState } from "react";
import fetches from "../services/fetches";
import "./personForm.css";
export default function Personform({ persons, handleAddPerson }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [error, setError] = useState({ status: false, message: null });

  const handleNewPerson = async (e) => {
    e.preventDefault();
    if (!newName || !newNumber) {
      setError({ status: true, message: "All fields are required" });
    } else {
      const contactExist = persons?.find(
        (elem) => elem.name.toLowerCase() === newName.toLowerCase()
      );

      if (contactExist) {
        if (
          confirm(
            `${newName}, is already added to the phonebook, would you like update the number?`
          )
        )
          await fetches
            .updateContact(contactExist?.id, newNumber)
            .then((data) => {
              handleAddPerson(data);
              setNewName("");
              setNewNumber("");
            });
      } else {
        const newObj = {
          name: newName,
          number: newNumber,
        };
        await fetches.create(newObj).then((data) => {
          if (data.error) {
            setError({
              status: true,
              message: "Error creating contact: " + data.error,
            });
          } else {
            handleAddPerson(data);
            setNewName("");
            setNewNumber("");
          }
        });
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleNewPerson}>
        <div>
          Name{" "}
          <input
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
              setError({ status: false });
            }}
          />
        </div>
        <div>
          Number{" "}
          <input
            value={newNumber}
            onChange={(e) => {
              setNewNumber(e.target.value);
              setError({ status: false });
            }}
          />
        </div>
        {error.status && <span>{error.message}</span>}
        <div>
          <button className="addBtn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
