const fetchResource = url =>
    fetch(url)
        .then(response => response.json())

export const fetchCharaters = () =>
    fetchResource('http://hp-api.herokuapp.com/api/characters')
