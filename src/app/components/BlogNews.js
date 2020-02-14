import React from 'react';

class News extends React.Component
{
    render() {
        return <a href="#" className="list-group-item">
            <h4 className="list-group-item-heading">{this.props.title}</h4>
            <p className="list-group-item-text">{this.props.content}</p>
        </a>
    }
}

export default News;