import axios from 'axios';

export function fetchPeople() {
    return {
        type: 'FETCH_PEOPLE',
        payload: Promise.all([
            axios.get('https://swapi.co/api/people/?format=json&page=1'),
            axios.get('https://swapi.co/api/people/?format=json&page=2'),
            axios.get('https://swapi.co/api/people/?format=json&page=3'),
            axios.get('https://swapi.co/api/people/?format=json&page=4')
        ])
    }
}

export function searchPeople(person) {
    return {
        type: 'SEARCH_PEOPLE',
        payload: person
    }
}

