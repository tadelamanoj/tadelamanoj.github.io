import React from "react";
import "./header.css";
import {Link} from 'react-router-dom'
function header() {
    return (
        <div className="header col-12 sm">
            <Link className="header_logo" to='/home'>
                <span className="header_option1">🟢Manoj Kumar Tadela</span> 
            </Link>
            

            
            <div className="header_nav">
                <Link to='/details' ><div className="header_option"><span className="header_option1">About</span></div></Link>
                <Link to='/work'><div className="header_option"><span className="header_option1">Work</span></div></Link>
                <Link to='/contact'><div className="header_option"><span className="header_option1">Contact</span></div></Link>
            </div>
        
        </div>
    );
}

export default header;