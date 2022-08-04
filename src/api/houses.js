export const fetchHouses = () =>
  fetch(`http://localhost:3001/v1/houses`).then((response) => response.json());