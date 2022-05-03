/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import './home.css'
function home(){
    return (
        <div className="home">
        
            <Image className="home_pic col-3" src={require('./images/mypic.png')} rounded />
            <div className="home_details col-9">All about me.</div>
            
        </div> 
    )
}
export default home