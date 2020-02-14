import React from 'react';
import Articles from "./BlogArticles";

class Content extends React.Component {
    render() {
        let listArticles = this.props.articles.map(function (article, index) {
            return <Articles
                id={article.id}
                author={article.author}
                date={article.date}
                image={article.image}
                title={article.title}
                content={article.content}
                url={article.url}
                key={index}
            />
        });
        return (
            <div className="content">
                {listArticles}
            </div>
        )
    }
}

export default Content;