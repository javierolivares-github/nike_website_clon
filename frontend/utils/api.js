import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + STRAPI_API_TOKEN
    }
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};


// Fetch data from JSON
export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};


