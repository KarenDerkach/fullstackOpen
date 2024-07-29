const getAllCountry = () => {
  const request = fetch(`${import.meta.env.VITE_COUNTRY_BASE_URL}/all`);
  return request.then((response) => response.json());
};

const getCountry = (name) => {
  const request = fetch(
    `${import.meta.env.VITE_COUNTRY_BASE_URL}/name/${name}`
  );
  return request.then((response) => response.json());
};

const getWeather = (lat, lon) => {
  const request = fetch(
    `${import.meta.env.VITE_WHEATER_URL}lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WHEATER_API
    }`
  );

  return request.then((response) => response.json());
};

export default {
  getAllCountry,
  getCountry,
  getWeather,
};
