import React from "react";
import './details.css';
function Details() {
    function numberOfYears(){
        const current = new Date();
        let mon=current.getMonth()-10
        let yr=current.getFullYear()-2020
        if(mon<0){
            yr=yr-1
            mon=12+mon
        }
        const date = `${yr}year ${mon}months ${current.getDate()}days `;
        return date
    }
    return ( 
        <div className="details">
            <span><img className="image col-sm-12 col-md-8 col-xl-5" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="full-stack"></img></span>
            <span className="details_para col-xl-5"><strong className="strong">I'm Manoj Kumar Tadela, a Software Engineer and  working as a Full-Stack developer.</strong>
            <p className="para">I design and develop intuitive web applications and ecommorce web sites.
            I have {numberOfYears()} of hands-on experience in developing scalable websites/applications 
            using wide range of front-end and back-end skills.</p></span>
            
            {/* <img className="" src="https://cdn-colla.nitrocdn.com/aGOFLQWREmkPcEuaJpGePQetRgHRrvYU/assets/static/optimized/rev-18643b3/wp-content/uploads/2018/06/full-stack-development-main.jpg" alt="full-stack_image"></img> */}
        </div>
     );
}

export default Details; 