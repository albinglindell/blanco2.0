import React from "react";
import loop from "../../assets/videos/loop.mp4";
import SvgAnimation from "../../components/SvgAnimation/SvgAnimation";
import Header from "../../components/header/Header";
import ArtistNavigation from "../../components/artistsNavigation/ArtistNavigation";
import AboutUs from "../aboutUs/AboutUs";
// import FlimmerLogo from '../../components/flimmerLogo/FlimmerLogo'
function Startpage() {
  return (
    <div>
    <div className="videoContainer">
      <SvgAnimation />
      <Header />
      <div className="filterOverlay"></div>
      <video className="video" autoPlay muted src={loop} typeof="video/mp4" loop></video>
    </div>
    <ArtistNavigation />
    <AboutUs />
    </div>
  );
}

export default Startpage;
