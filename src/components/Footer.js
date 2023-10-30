import React from "react";
class Footer extends React.Component{
    render (){
        return(
            <div className="footer">
                <div className="footer-logo">
                    <img className="logo-img-ftr" src="./assets/logo-perpus1.png" />
                    <a className="lebel-footer">Quemen Library</a>
                </div>
                <ul className="footer-list">
                    <li>Layanan</li>
                    <li>Hubungi Kami</li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default Footer;