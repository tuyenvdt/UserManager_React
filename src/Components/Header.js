import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <h1 className="display-4">Project quản lí người dùng bằng React JS</h1>
                <p className="lead">với dữ liệu Json</p>
                <hr className="my-4" />
            </div>

        );
    }
}

export default Header;