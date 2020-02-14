import React from 'react';
import FilmsList from "../components/FilmsList";

import {connect} from 'react-redux';
import {fetchFilms, searchFilm} from "../actions/filmsActions";


@connect((store) => {
    return {
        films: store.films.films,
        is_fetching: store.films.is_fetching
    }
})

export default class Films extends React.Component {
    constructor(props) {
        super(props);
        let toDispatch = fetchFilms();
        this.props.dispatch(toDispatch);

        this.searchFilms = this.searchFilms.bind(this);

    }

    searchFilms(props) {
        let title = $(".input-search").val();
        if(!title) {
            let toDispatch = fetchFilms();
            props.dispatch(toDispatch);
        } else {
            title = title.trim();
            let searchItem = props.films.find(item => item.title === title);
            if(searchItem) {
                let toDispatch = searchFilm([searchItem]);
                props.dispatch(toDispatch);
            }
        }

    }

    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (
                            this.props.is_fetching ? 'Pending' :
                                <FilmsList films={this.props.films} searchFilms={this.searchFilms.bind(this, this.props)}/>
                        )
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}