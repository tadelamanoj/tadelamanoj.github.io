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
import Skills from './skills.json'
import Work from './work'
import Achievements from './achievements'
import ReactTyped from "react-typed"
function home(){
    
    return (
    
        <Paper className="home" elevation={5} 
        style={{backgroundColor:"black"}}
        >
            <Image
            className="avat"
            src={require('./images/mypicc.png')}
            alt="manoj"
            roundedCircle
            />
            <div className="home_card col-8">
                <h1 className="home_header" >Hi There.!</h1>
                <p id="intro">I'm Manoj Kumar,</p>
                <p id="intro"><ReactTyped strings={["A Full-Stack Developer based in Bangalore."]} typeSpeed={100} loop /></p> 
                <Link to="/contact"><Button className="contact" color="primary" variant="contained" >Contact Me</Button></Link>
            </div>
            
            <div className="experience">
                <div className="experience_header" >Experiences</div>
                <Work/>
            </div>

            <div className="skill">
                <div className="skill_head">Skills</div>
                {
                    Skills.map((skill,index)=>{
                        return (
                            <Image className="skills" key={index} src={skill.image} alt={skill.skill}/>
                        )
                    })
                }
                
            </div>
            <div className="achievements">
                <Achievements/>
            </div>

        </Paper>
        
    )
}
export default home