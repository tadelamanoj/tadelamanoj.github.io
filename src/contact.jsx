import React from 'react';
// import Card from "@mui/material/Card"
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css'
function contact() {
    return(
        <div className='card container'>
            <div className='contact'>
                <p id="lists">
                    <CallIcon color='primary' sx={{ fontSize: 40 }} />
                    <span id="lists">9100526452</span>
                </p>
                <p id="lists">
                    <EmailIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a className='anchor' href='https://mail.google.com/mail/u/0/#inbox'> manojkumartadela333@gmail.com</a></span>
                </p>
                <p id="lists">
                    <LinkedInIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a className='anchor' href='https://www.linkedin.com/in/manoj-kumar-tadela-264056130/'> LinkedIn</a></span>
                </p>
                {/* <p id="lists">
                    <GitHubIcon color='black' sx={{ fontSize: 40 }}/>
                    <span><a className='anchor' href='https://github.com/tadelamanoj'> Git Hub</a></span>
                </p> */}
                <p id="lists">
                    <FacebookRoundedIcon color='primary' sx={{ fontSize: 40 }}/>
                    <span><a className='anchor' href='https://www.facebook.com/profile.php?id=100005478107549'> FaceBook</a></span>
                </p>
                
            </div>
        </div>
    )
}
export default contact