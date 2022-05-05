/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import { 
     Image
     } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import './home.css'
import Paper from '@mui/material/Paper'
import {Link} from 'react-router-dom'
import Button  from "@material-ui/core/Button"
function home(){
    return (
    
        <Paper className="home " elevation={5}>
            <Image
            className="avat col-3 "
            src={require('./images/mypicc.png')}
            alt="manoj"
            roundedCircle
            />
            <div className=" home_card1 col-9">
                <h1 className="home_header" >Hi There..!</h1>
                <p>I'm Manoj Kumar Tadela.</p>
                <p>Passionate full-stack engineer with years of hands-on experience in developing scalable websites/applications using wide range of frot-end and back-end skills. </p> 
                <Link to="/contact"><Button className="contact" color="primary" variant="contained" >Contact Me</Button></Link>
            </div>
        </Paper>
        
    )
}
export default home