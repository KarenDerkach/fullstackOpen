const baseUrl = "/api/persons";

const getAll = () => {
  const request = fetch(baseUrl);
  const data = request.then((response) => response.json());
  return data;
};

const create = (newObject) => {
  const request = fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  });
  return request.then((response) => response.json());
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
