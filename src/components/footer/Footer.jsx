import React from "react";
import VideoPlayer from "react-background-video-player";
import flimmer from "../../assets/videos/flimmer.mp4";

function Footer() {
    return (
        <div className="footerComponent">
            <div className="videoFlimmerLoop">
            <VideoPlayer 
                id="flimmerBlancoLogo"
                src={flimmer}
                autoPlay={true}
                muted={true}
            />        
            </div>
        </div>    
    );
}

export default Footer;
