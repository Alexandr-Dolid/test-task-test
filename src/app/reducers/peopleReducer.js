import * as People from "../constants/people";

export function peopleReducer(state = {people: [], is_fetching: false}, action) {
    switch (action.type) {
        case People.FETCH_PEOPLE_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case People.FETCH_PEOPLE_FULFILLED: {
            state = {...state, is_fetching: false, people: action.payload};
            break;
        }

        case People.FETCH_PEOPLE_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }

        case People.SEARCH_PEOPLE: {
            state = {...state, is_fetching: false, people: action.payload};
            break;
        }
    }
    return state;
}