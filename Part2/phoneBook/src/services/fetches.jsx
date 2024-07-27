const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = fetch(baseUrl);
  return request.then((response) => response.json());
};

const create = (newObject) => {
  const request = fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  });
  return request.then((response) => response.text());
};

const deleteContact = (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return request.then((response) => response.json());
};

const updateContact = (id, number) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: number,
    }),
  });
  return request.then((response) => response.json());
};

export default {
  getAll,
  create,
  deleteContact,
  updateContact,
};
