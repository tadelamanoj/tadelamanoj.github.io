/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { 
    //  Image
     } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
// import { Card } from "material-ui"
import './home.css'
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
function home(){
    return (
    
        <Paper className="home" elevation={5}>
            <div className="home_pic col-3">
                <Avatar 
                className="avat"
                src={require('./images/mypicc.png')}
                alt="manoj"
                sx={{ width: 300, height: 300 }}
                />
            </div>
            <div className=" home_card1 col-8">
                <h1 className="home_header" >Hi There..!</h1>
                <p>I'm Manoj Kumar Tadela.</p>
                <p>Passionate full-stack engineer with years of hands-on experience in developing scalable websites/applications using wide range of frot-end and back-end skills. </p> 
            </div>
        </Paper>
        
    )
}
export default home