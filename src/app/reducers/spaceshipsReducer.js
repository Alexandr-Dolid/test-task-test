import * as Spaceships from "../constants/spaceships";

export function spaceshipsReducer(state = {spaceships: [], is_fetching: false}, action) {
    switch (action.type) {
        case Spaceships.FETCH_SPACESHIPS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Spaceships.FETCH_SPACESHIPS_FULFILLED: {
            state = {...state, is_fetching: false, spaceships: action.payload};
            break;
        }

        case Spaceships.FETCH_SPACESHIPS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }

        case Spaceships.SEARCH_SPACESHIPS: {
            state = {...state, is_fetching: false, spaceships: action.payload};
            break;
        }
    }
    return state;
}