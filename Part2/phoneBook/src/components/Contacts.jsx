import Contact from "./Contact";

export default function Contacts({ data, handleDeletPerson }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data?.map((elem) => {
        return (
          <div key={elem.id}>
            {" "}
            <Contact elem={elem} handleDeletPerson={handleDeletPerson} />
          </div>
        );
      })}
    </div>
  );
}
