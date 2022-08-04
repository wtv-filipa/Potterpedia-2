export const fetchForum = () =>
  fetch(`http://localhost:3001/v1/comments`).then((response) => response.json());

export const createComment = (accessToken, body) =>
  fetch(`http://localhost:3001/v1/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ body }),
  }).then((response) => response.json());

export const updateComment = ( accessToken, id, body) =>
  fetch(`http://localhost:3001/v1/comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ body }),
  }).then((response) => response.json());

export const deleteComment = (accessToken, id) =>
  fetch(`http://localhost:3001/v1/comments/${id}`, {
    method: "DELETE",
    headers:{
      Authorization: `Bearer ${accessToken}`,
    },
  });
