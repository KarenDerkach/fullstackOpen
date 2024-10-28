import { useEffect, useState } from "react";
import fetches from "./services/fetches";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Contacts from "./components/Contacts";

import "./App.css";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const filterContact = persons?.filter((elem) =>
    elem.name?.toLowerCase()?.includes(nameFilter?.toLowerCase())
  );

  useEffect(() => {
    fetches
      .getAll()
      .then((data) => {
        setPersons(data);
      })
      .catch((error) => {
        alert("FAIL", error);
      });
  }, []);

  //HANDLE STATES ON REAL TIME

  const handleAddPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const handleDeletPerson = (id) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="navbar">
        <section>
          <h3>FILTERS</h3>
          <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />
        </section>
        <section>
          <h3>ADD CONTACT</h3>
          <PersonForm persons={persons} handleAddPerson={handleAddPerson} />
        </section>
      </div>
      <h2>List</h2>

      {nameFilter.length < 0 ? (
        <Contacts data={persons} handleDeletPerson={handleDeletPerson} />
      ) : filterContact?.length === 0 ? (
        "No result"
      ) : (
        <Contacts data={filterContact} handleDeletPerson={handleDeletPerson} />
      )}
    </div>
  );
};

export default App;
