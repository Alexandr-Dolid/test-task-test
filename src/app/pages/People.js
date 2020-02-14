import React from 'react';
import PeopleList from "../components/PeopleList";

import {connect} from 'react-redux';
import {fetchPeople, searchPeople} from "../actions/peopleActions";

@connect((store) => {
    return {
        people: store.people.people,
        is_fetching: store.people.is_fetching
    }
})

export default class People extends React.Component {
    constructor(props) {
        super(props);
        let toDispatch = fetchPeople();
        this.props.dispatch(toDispatch);

        this.searchPeople = this.searchPeople.bind(this);

    }

    searchPeople(props) {
        let title = $(".input-search").val();
        if(!title) {
            let toDispatch = fetchPeople();
            props.dispatch(toDispatch);
        } else {
            title = title.trim();
            let searchItem;
            for(let i = 0; i < this.props.people.length; i++) {
                props.people[i].data.results.find(item => {
                    if(item.name === title) {
                        searchItem = item;
                        return item;
                    }
                });
            }
            if(searchItem) {
                let toDispatch = searchPeople([searchItem]);
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
                                <PeopleList people={this.props.people} searchPeople={this.searchPeople.bind(this, this.props)}/>
                        )
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}