import React from "react";
import loop from "../../assets/videos/loop.mp4";
import SvgAnimation from "../../components/SvgAnimation/SvgAnimation";
import Header from "../../components/header/Header";
import ArtistNavigation from "../../components/artistsNavigation/ArtistNavigation";
import AboutUs from "../aboutUs/AboutUs";
import VideoPlayer from "react-background-video-player";

// import FlimmerLogo from '../../components/flimmerLogo/FlimmerLogo'

const isMobile = window.innerWidth <= 768

function Startpage() {
  return (
    <div className="startPageContainer">
    <div className="videoContainer">
      <SvgAnimation />
      <Header />
      {/* <div className={`${isMobile ? 'mobileFilterOverlay': "filterOverlay"}`}></div> */}
      <div className="videoLoopContainer">
      <VideoPlayer 
          className="video"
          src={loop}
          autoPlay={true}
          muted={true}/>
      </div>
     {/* {!isMobile && <video className="video" autoPlay muted src={loop} typeof="video/mp4" loop></video>} */}
    
     {isMobile && <div className="mobileLoop"></div>}
    </div>
    <ArtistNavigation />
    <AboutUs />
    </div>
  );
}

export default Startpage;
