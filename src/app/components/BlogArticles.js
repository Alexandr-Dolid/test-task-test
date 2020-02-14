import React from 'react';

class Articles extends React.Component {
    render() {
        return (
            <article className="panel panel-default">
                <div className="panel-body">
                    <a href={this.props.url}>
                        <img src={this.props.image} alt="/" className="img-thumbnail"/>
                    </a>
                    <h1>
                        <a href={this.props.url}>{this.props.title}</a>
                    </h1>
                    <span className="text-muted">{this.props.date} by {this.props.author}</span>
                    <p>{this.props.content}</p>
                </div>
            </article>
        )
    }
}

export default Articles;