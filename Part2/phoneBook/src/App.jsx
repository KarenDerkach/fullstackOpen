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
      .then((data) => setPersons(data))
      .catch((error) => {
        alert("FAIL", error);
      });
  }, [persons]);

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
          <PersonForm persons={persons} setPersons={setPersons} />
        </section>
      </div>
      <h2>Numbers</h2>

      {nameFilter.length < 0 ? (
        <Contacts data={persons} />
      ) : filterContact?.length === 0 ? (
        "No result"
      ) : (
        <Contacts data={filterContact} />
      )}
    </div>
  );
};

export default App;
