import React from 'react';
import SpaceshipsList from "../components/SpaceshipsList";

import {connect} from 'react-redux';
import {fetchSpaceships, searchSpaceships} from "../actions/spaceshipsAction";

@connect((store) => {
    return {
        spaceships: store.spaceships.spaceships,
        is_fetching: store.spaceships.is_fetching
    }
})

export default class Spaceships extends React.Component {
    constructor(props) {
        super(props);
        let toDispatch = fetchSpaceships();
        this.props.dispatch(toDispatch);

        this.searchSpaceships = this.searchSpaceships.bind(this);

    }

    searchSpaceships(props) {
        let title = $(".input-search").val();
        if(!title) {
            let toDispatch = fetchSpaceships();
            props.dispatch(toDispatch);
        } else {
            title = title.trim();
            let searchItem;
            for(let i = 0; i < this.props.spaceships.length; i++) {
                props.spaceships[i].data.results.find(item => {
                    if(item.name === title) {
                        searchItem = item;
                        return item;
                    }
                });
            }
            if(searchItem) {
                let toDispatch = searchSpaceships([searchItem]);
                props.dispatch(toDispatch);
            }

        }

    }

    render() {
        return (
            <div >
                {
                    (!this.props.children) ?
                        (
                            this.props.is_fetching ? 'Pending' :
                                <SpaceshipsList spaceships={this.props.spaceships} searchSpaceships={this.searchSpaceships.bind(this, this.props)}/>
                        )
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}