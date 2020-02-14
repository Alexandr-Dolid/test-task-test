import React from 'react';
import Header from '../components/BlogHeader';
import Sidebar from "./BlogSidebarLayout";
import Modal from "../components/BlogLoginModal";
import config from '../config/site.config';
import {Provider} from 'react-redux';
import store from "../../app/stores/store";

import Films from "../../app/pages/Films";
import Spaceships from "../../app/pages/Spaceships";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import People from "../pages/People";

class Layout extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Header site={config.site} nav={config.nav} login={config.login}/>
                        <div className=" row-custom">
                            <div className="column-xs-12 column-sm-8 content-articles">
                                <Switch>
                                    <Route exact path="/films" component={Films}/>
                                    <Route path="/spaceships" component={Spaceships} />
                                    <Route path="/people" component={People} />
                                </Switch>
                            </div>
                            <div className="column-xs-12 column-sm-4 content-sidebar">
                                <Sidebar
                                    categoriesTitle={config.categoriesTitle}
                                    newsTitle={config.newsTitle}
                                    categories={config.categories}
                                    news={config.news}
                                />
                            </div>
                        </div>
                        <Modal/>
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default Layout;