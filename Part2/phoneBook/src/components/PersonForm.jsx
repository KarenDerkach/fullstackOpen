import { useState } from "react";
import fetches from "../services/fetches";
import "./personForm.css";
export default function Personform({ persons, setPersons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNewPerson = (e) => {
    e.preventDefault();
    const contactExist = persons?.find(
      (elem) => elem.name.toLowerCase() === newName.toLowerCase()
    );

    if (contactExist) {
      confirm(
        `${newName}, is already added to the phonebook, would you like update the number?`
      )
        ? fetches
            .updateContact(contactExist?.id, newNumber)
            .then((data) => console.log(data))
        : null;
    } else {
      const newObj = {
        name: newName,
        number: newNumber,
      };

      fetches.create(newObj).then((data) => {
        setPersons(persons?.concat(data));
      });

      setNewName("");
      setNewNumber("");
    }
  };
  return (
    <div>
      <form onSubmit={handleNewPerson}>
        <div>
          Name{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button className="addBtn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
