let siteName = require('./siteName.config');
let articlesHeading = require('./articlesHeading.config');
let categoriesHeading = require('./categoriesHeading.config');
let newsHeading = require('./newsHeading.config');
let siteNav = require('./siteNav.config');
let loginBtn = require('./loginBtn.config');
let articlesList = require('./articlesList.config');
let categoriesList = require('./categoriesList.config');
let newsList = require('./newsList.config');

let configObj = {
    site: siteName,
    nav: siteNav,
    login: loginBtn,
    articles: articlesList,
    articlesTitle: articlesHeading,
    categories: categoriesList,
    categoriesTitle: categoriesHeading,
    news: newsList,
    newsTitle: newsHeading
};

module.exports = configObj;