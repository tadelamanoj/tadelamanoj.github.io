import React from "react";
import "./header.css";
import {Link} from 'react-router-dom'
import Menu from './menu'
import resumeurl from './resume.json'

function Header() {

    const resumeUrl=resumeurl.resume
    const handleClick = () => {
        window.open(resumeUrl);
      };
    return (
        <div className="header">
            <Link className="header_logo" to='/'>
                <span className="header_option1">🟢Manoj Kumar Tadela</span> 
            </Link>
            
            <div className="header_nav">
                <Link to='/details' ><div className="header_option1">About</div></Link>
                <Link to='/work'><div className="header_option1">Work</div></Link>
                <Link to='/contact'><div className="header_option1">Contact</div></Link>
                <Link to='/'><div className="header_option1" onClick={handleClick}>Resume</div></Link>
            </div>
            <div className="header_dash">
                <Menu />
            </div>
        </div>
    );
}

export default Header;