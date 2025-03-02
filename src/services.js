const url = "http://localhost:3001/users";

export const getUsers = async () => {
  return fetch(url).then((response) => response.json());
};

export const addUser = async (userData) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
};

export const deleteUser = async (userId) => {
  return fetch(`${url}/${userId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};
