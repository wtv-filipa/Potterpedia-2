export const fetchFavorites = (accessToken, nameCharacter) =>
  fetch(`http://localhost:3001/v1/favorites/${nameCharacter}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }).then((response) => response.json());

export const createFavorites = (accessToken, nameCharacter) =>
  fetch(`http://localhost:3001/v1/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ nameCharacter }),
  }).then((response) => response.json());

export const deleteFavorites = (accessToken, id) =>
  fetch(`http://localhost:3001/v1/favorites/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
