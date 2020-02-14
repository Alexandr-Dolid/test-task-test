import * as Films from "../constants/films";

export function filmsReducer(state = {films: [], is_fetching: false}, action) {
    switch (action.type) {
        case Films.FETCH_FILMS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Films.FETCH_FILMS_FULFILLED: {
            state = {...state, is_fetching: false, films: action.payload.data.results};
            break;
        }

        case Films.FETCH_FILMS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }

        case Films.SEARCH_FILMS: {
            state = {...state, is_fetching: false, films: action.payload};
            break;
        }
    }
    return state;
}