import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {filmsReducer} from "../reducers/filmsReducer";
import {spaceshipsReducer} from "../reducers/spaceshipsReducer";
import {peopleReducer} from "../reducers/peopleReducer";


const middleware = applyMiddleware(promise(), logger());

const reducer = combineReducers({
    films: filmsReducer,
    spaceships: spaceshipsReducer,
    people: peopleReducer
});


const store = createStore(reducer, middleware);

export default store;