import React from "react";
import './details.css';
function Details() {
    const about=`I am an accomplished Full Stack Web Developer with 3 years of professional experience. My expertise encompasses a wide array of web development technologies, with a strong focus on the MERN stack, which includes proficiency in MongoDB, Express, Node.js, React, Redux, and related technologies.
    Throughout my career, I have successfully executed numerous projects, demonstrating a deep understanding of both front-end and back-end development. My proficiency extends beyond the technological realm, I excel in problem-solving and regularly engage in Data Structures and Algorithms challenges on platforms such as LeetCode, codechef and Google Kickstart.
    I am now actively seeking new opportunities to leverage my skills and expertise in the MERN stack. I am eager to contribute to dynamic teams and projects that demand excellence in web development.
    `
    function numberOfYears(){
        const current = new Date();
        let mon=current.getMonth()-10
        let yr=current.getFullYear()-2020
        if(mon<0){
            yr=yr-1
            mon=12+mon
        }
        const date = `${yr} years ${mon} months ${current.getDate()} days `;
        return date
    }
    return ( 
        <div className="details">
            <span style={{margin:1,padding:1}}><img style={{margin:1,padding:1}} className="image col-sm-12 col-md-8 col-xl-5" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="full-stack"></img></span>
            <span className="details_para col-xl-5"><strong className="strong">I'm Manoj Kumar Tadela, an accomplished Full Stack Web Developer.</strong>
            <p className="para" >
            I have {numberOfYears()} of hands on experience in designing and developing intuitive web applications and e-commerce web sites.
            My expertise encompasses a wide array of web development technologies, with a strong focus on the MERN stack, which includes proficiency in MongoDB, Express, Node.js, React, Redux, and related technologies.
            Throughout my career, I have successfully executed numerous projects, demonstrating a deep understanding of both front-end and back-end development. My proficiency extends beyond the technological realm, I excel in problem-solving and regularly engage in Data Structures and Algorithms challenges on platforms such as LeetCode, codechef and Google Kickstart.
            I am now actively seeking new opportunities to leverage my skills and expertise in the MERN stack. I am eager to contribute to dynamic teams and projects that demand excellence in web development.
            
            </p></span>
            
            {/* <img className="" src="https://cdn-colla.nitrocdn.com/aGOFLQWREmkPcEuaJpGePQetRgHRrvYU/assets/static/optimized/rev-18643b3/wp-content/uploads/2018/06/full-stack-development-main.jpg" alt="full-stack_image"></img> */}
        </div>
     );
}

export default Details; 