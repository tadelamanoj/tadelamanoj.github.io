import React from 'react';
import './achievements.css'
function achievements() {
    return(
        <div className='achieve text-align-center'>
            <div className='achieve_head '>
                Achievements
            </div>
            <ul>
                <li><strong>CSE GATE</strong> qualified in 2021.</li>
                <li>Solved more than 400+ DSA problems in various platforms like Leetcode, CodeChef, GeeksForGeeks, HackerEarth, HackerRank</li>
                <li>Ranked below 1500 among 150000 which is top 1% in HackwithInfy conducted by Infosys in 2020.</li>
                <li>Infosys certified React.js, MongoDb, Node.js, Express.js, Angular Stack. </li>
                <li>Certified in Data Mining from <strong> IIT Madras</strong>.</li> 
                <li>Recieved Prime Minister merit scholarship in B-Tech.</li> 
                <li><strong>3* starter and progress to 5*</strong>achieved in code chef.Active participant of competitive programming in code chef and leetcode.</li>  
                <li>Organizer of <strong>#code</strong> in Sri Venkateswara University College Of Engineering.</li> 
            </ul>
        </div>
    )
    
}
export default achievements