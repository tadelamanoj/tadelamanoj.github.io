import React from "react";
import './details.css';
function Details() {
    return ( 
        <div className="details">
            <span><img className="image col-sm-12 col-md-8 col-xl-5" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="full-stack"></img></span>
            <span className="details_para col-xl-5"><strong className="strong">I'm Manoj Kumar Tadela, a Software Engineer and  working as a Full-Stack developer.</strong>
            <p>I design and develop intuitive web applications and ecommorce web sites.
            I have years of hands-on experience in developing scalable websites/applications 
            using wide range of front-end and back-end skills.</p></span>
            
            {/* <img className="" src="https://cdn-colla.nitrocdn.com/aGOFLQWREmkPcEuaJpGePQetRgHRrvYU/assets/static/optimized/rev-18643b3/wp-content/uploads/2018/06/full-stack-development-main.jpg" alt="full-stack_image"></img> */}
        </div>
     );
}

export default Details; 