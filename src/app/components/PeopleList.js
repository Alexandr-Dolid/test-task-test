import React from 'react';

export default class PeopleList extends React.Component {
    render() {
        if (!this.props.people.length)
            return null;

        let data = [];
        if(this.props.people.length === 1) {
            debugger;
            data.push(...this.props.people);
        } else {
            for(let i = 0; i < this.props.people.length; i++) {
                this.props.people[i].data.results.forEach(item => data.push(item));
            }
        }


        let film = data.map((people, index) => {
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
                            {people.name}
                        </h3>
                        <p>
                            gender: {people.gender}
                        </p>

                    </div>
                </div>
            );
        });
        return (
            <div className="page-people">
                <div className="input-group">
                    <input type="text" className="form-control input-search" placeholder="Search for..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.props.searchPeople}>Search!</button>
                    </span>
                </div>
                {film}
            </div>
        )
    }
}