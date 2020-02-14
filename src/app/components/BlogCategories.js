import React from 'react';

class Categories extends React.Component
{
    render() {
        return (
            <a href="#" className="list-group-item">{this.props.title}</a>
        )
    }
}

export default Categories;