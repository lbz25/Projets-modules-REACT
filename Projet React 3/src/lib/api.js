const API_URL = "http://localhost:3000";

export const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  return fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });
};