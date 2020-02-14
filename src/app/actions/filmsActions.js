import axios from 'axios';

export function fetchFilms() {
    let url = 'https://swapi.co/api/films/?format=json';
    return {
        type: 'FETCH_FILMS',
        payload: axios.get(url)
    }
}

export function searchFilm(film) {
    return {
        type: 'SEARCH_FILMS',
        payload: film
    }
}

