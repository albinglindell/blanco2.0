import React from "react";
import loop from "../../assets/videos/loop.mp4";
import SvgAnimation from "../../components/SvgAnimation/SvgAnimation";
import Header from "../../components/header/Header";
import ArtistNavigation from "../../components/artistsNavigation/ArtistNavigation";
import AboutUs from "../aboutUs/AboutUs";
// import FlimmerLogo from '../../components/flimmerLogo/FlimmerLogo'

const isMobile = window.innerWidth <= 768

function Startpage() {
  return (
    <div className="startPageContainer">
    <div className="videoContainer">
      <SvgAnimation />
      <Header />
      <div className="filterOverlay"></div>
     {!isMobile && <video className="video" autoPlay muted src={loop} typeof="video/mp4" loop></video>}
     {isMobile && <div className="mobileLoop"></div>}
    </div>
    <section>
    <ArtistNavigation />
    </section>
    <section>
    <AboutUs />
    </section>
    </div>
  );
}

export default Startpage;
