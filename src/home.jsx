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
// import Contact from "./contact"
import Skills from './skills.json'
function home(){
    return (
    
        <Paper className="home" elevation={5}>
            <Image
            className="avat"
            src={require('./images/mypicc.png')}
            alt="manoj"
            height={300}
            width={300}
            roundedCircle
            />
            <div className="home_card col-8">
                <h1 className="home_header" >Hi There.!</h1>
                <p>I'm Manoj,</p>
                <p>A Full-Stack Engineer based in Andhra Pradesh. </p> 
                <Link to="/contact"><Button className="contact" color="primary" variant="contained" >Contact Me</Button></Link>
            </div>

            <div className="skill col-11">
                <div className="skill_head">Skills</div>
                {
                    Skills.map(skill=>{
                        return (
                            <Image className="skills" src={skill.image} alt={skill.skill}/>
                        )
                    })
                }
                
            </div>



        </Paper>
        
    )
}
export default home