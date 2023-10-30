import React from "react";

class Header extends React.Component{
    render () {
        return (
            <div className="header">
                <div className="header-logo">
                    <img className="logo" src="./assets/logo-perpus1.png" />
                    <a className="lebel">Quemen Library</a>
                </div>
                <div className="header-login">
                    <a>Login</a>
                </div>
            </div>
        );
    }
}

export default Header;