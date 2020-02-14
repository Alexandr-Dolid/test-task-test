import axios from 'axios';

export function fetchSpaceships() {
    return {
        type: 'FETCH_SPACESHIPS',
        payload: Promise.all([
            axios.get('https://swapi.co/api/starships/?format=json&page=1'),
            axios.get('https://swapi.co/api/starships/?format=json&page=2'),
            axios.get('https://swapi.co/api/starships/?format=json&page=3'),
            axios.get('https://swapi.co/api/starships/?format=json&page=4')
        ])
    }
}

export function searchSpaceships(spaceship) {
    return {
        type: 'SEARCH_SPACESHIPS',
        payload: spaceship
    }
}

