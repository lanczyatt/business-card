const API_URL = `https://reqres.in/api/users`;

export const getUsersQuery = async (queryParam: string) => {
  const response = await fetch(`${API_URL}?${queryParam}`, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  const userObject = await response.json();
  return userObject;
};

export const deleteUserQuery = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.status;
};