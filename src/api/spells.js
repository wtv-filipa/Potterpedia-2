export const fetchSpells = () =>
  fetch(`http://localhost:3001/v1/spells`).then((response) => response.json());

export const createSpell = (accessToken, effect, spell, type) =>
  fetch(`http://localhost:3001/v1/spells`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ effect, spell, type }),
  }).then((response) => response.json());

export const updateSpell = (accessToken, id, effect, spell, type) =>
  fetch(`http://localhost:3001/v1/spells/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ effect, spell, type }),
  }).then((response) => response.json());

export const deleteSpell = (accessToken, id) =>
  fetch(`http://localhost:3001/v1/spells/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
