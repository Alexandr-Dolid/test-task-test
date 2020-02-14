import React from 'react';
import {NavLink} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <li >
                <NavLink to={this.props.url} className="nav__link" exact activeClassName="active">{this.props.title}</NavLink>
            </li>
        );
    }
}

export default Nav;