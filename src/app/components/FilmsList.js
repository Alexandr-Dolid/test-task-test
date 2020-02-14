import React from 'react';

export default class FilmsList extends React.Component {



    render() {
        if (!this.props.films.length)
            return null;

        let film = this.props.films.map((films, index) => {
            return (
                <div className="media" key={index}>
                    <div className="media-left media-middle">
                        <a href="#" className="media-left__link">
                            <img className="media-object media-left__img"
                                 src="https://via.placeholder.com/150"
                                 alt=""/>
                        </a>
                    </div>
                    <div className="media-body">
                        <h3>
                            {films.title}
                        </h3>
                        <p>
                            {films.director}
                        </p>
                        <p>
                            {films.opening_crawl}
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div className="page-films">
                <div className="input-group">
                    <input type="text" className="form-control input-search" placeholder="Search for..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.props.searchFilms}>Search!</button>
                    </span>
                </div>
                {film}
            </div>
        )
    }
}