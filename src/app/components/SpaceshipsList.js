import React from 'react';

export default class SpaceshipsList extends React.Component {
    render() {
        if (!this.props.spaceships.length)
            return null;

        let data = [];
        if(this.props.spaceships.length === 1) {
            data.push(...this.props.spaceships);
        } else {
            for(let i = 0; i < this.props.spaceships.length; i++) {
                this.props.spaceships[i].data.results.forEach(item => data.push(item));
            }
        }


        let film = data.map((spaceships, index) => {
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
                            {spaceships.name}
                        </h3>
                        <p>
                            {spaceships.model}
                        </p>
                        <p>
                            {spaceships.manufacturer}
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div className="page-spaceships">
                <div className="input-group">
                    <input type="text" className="form-control input-search" placeholder="Search for..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.props.searchSpaceships}>Search!</button>
                    </span>
                </div>
                {film}
            </div>
        )
    }
}