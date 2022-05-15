import React from "react";
import "./header.css";
import {Link} from 'react-router-dom'
import BasicMenu from "./menu";
function header() {
    return (
        <div className="header col-12">
            <Link className="header_logo" to='/manoj-kumar-tadela/home'>
                <span className="header_option1">🟢Manoj Kumar Tadela</span> 
            </Link>
            
            <div className="header_nav">
                <Link to='/manoj-kumar-tadela/details' ><div className="header_option"><span className="header_option1">About</span></div></Link>
                <Link to='/manoj-kumar-tadela/work'><div className="header_option"><span className="header_option1">Work</span></div></Link>
                <Link to='/manoj-kumar-tadela/contact'><div className="header_option"><span className="header_option1">Contact</span></div></Link>
            </div>
            <div className="header_dash">
                <BasicMenu />
            </div>
            
        </div>
    );
}

export default header;