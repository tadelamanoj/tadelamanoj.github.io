import React from 'react';
// import Card from "@mui/material/Card"
import CallIcon from '@mui/icons-material/Call';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './contact.css'
function contact() {
    return(
        <div className='card'>
            <div className='contact'>
                <h2>
                    <CallIcon color='primary' sx={{ fontSize: 40 }} />
                    <span>9100526452</span>
                </h2>
                <h2>
                    <ContactMailRoundedIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a href='https://mail.google.com/mail/u/0/#inbox'>manojkumartadela333@gmail.com</a></span>
                </h2>
                <h2>
                    <LinkedInIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a href='https://www.linkedin.com/in/manoj-kumar-tadela-264056130/'>LinkedIn</a></span>
                </h2>
                <h2>
                    <GitHubIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a href='https://github.com/tadelamanoj'>Git Hub</a></span>
                </h2>
                <h2>
                    <FacebookRoundedIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a href='https://www.facebook.com/profile.php?id=100005478107549'>FaceBook</a></span>
                </h2>
                
            </div>
        </div>
    )
}
export default contact