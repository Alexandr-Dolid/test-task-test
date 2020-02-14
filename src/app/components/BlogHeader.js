import React from 'react';
import Nav from "./BlogNav";
import LoginBtn from "./BlogLoginBtn";

class Header extends React.Component {
    isActive(href)
    {
        return window.location.pathname === href;
    }
    render() {
        let navList = this.props.nav.map((list, index) => {
            return <Nav title={list.title} url={list.url} key={index}  active={this.isActive(`${list.url}`)} />
        });
        let btnLogin = this.props.login.map((btn, index) => {
            return <LoginBtn url={btn.url} title={btn.title} key={index}/>
        });
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a href="/" className="navbar-brand">{this.props.site}</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">{navList}</ul>
                        {btnLogin}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;