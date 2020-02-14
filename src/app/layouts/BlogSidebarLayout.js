import React from 'react';
import Categories from "../components/BlogCategories";
import News from "../components/BlogNews";

class Sidebar extends React.Component
{
    render() {
        let listCategories = this.props.categories.map((category, index) => {
            return <Categories id={category.id} title={category.title} key={index} />
        });
        let listNews = this.props.news.map((itemNews, index) => {
            return <News id={itemNews.id} title={itemNews.title} content={itemNews.content} key={index}/>
        });
        return (
            <div>
                <h2>{this.props.categoriesTitle}</h2>
                <div className="list-group">
                    {listCategories}
                </div>
                <h2>{this.props.newsTitle}</h2>
                <div className="list-group">
                    {listNews}
                </div>
            </div>
        )
    }
}

export default Sidebar;