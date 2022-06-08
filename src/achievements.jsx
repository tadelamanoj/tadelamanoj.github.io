import React from 'react';
import './achievements.css'
function achievements() {
    return(
        <div className='achieve'>
            <div className='achieve_head'>Achievements</div>
                <li><strong>CSE GATE</strong> qualified in 2021.</li>
                <li>Ranked below 1500 among 150000 which is top 1% in HackwithInfy conducted by Infosys in 2020.</li>
                <li>Infosys certified MEAN Stack. </li>
                <li>Certified in Data Mining from <strong> IIT Madras</strong>.</li> 
                {/* <li>Won Prime Minister merit scholarship for a period of 4 years.</li>  */}
                <li><strong>3* starter </strong>achieved in code chef.Active participant of competitive programming in code chef and leetcode.</li>  
                <li>Organizer of <strong>#code</strong> in Sri Venkateswara University College Of Engineering.</li> 
        </div>
    )
    
}
export default achievements