import React from 'react';

class LoginBtn extends React.Component
{
    render() {
        return <ul className="btn btn-primary navbar-btn navbar-right" data-toggle="modal" data-target={this.props.url}>{this.props.title}</ul>
    }
}

export default LoginBtn;