import Contact from "./Contact";

export default function Contacts({ data }) {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap" }}>
      {data?.map((elem) => {
        return (
          <div key={elem.id}>
            {" "}
            <Contact elem={elem} />
          </div>
        );
      })}
    </div>
  );
}
