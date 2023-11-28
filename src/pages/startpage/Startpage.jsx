import React from "react";
import loop from "../../assets/videos/loop.mp4";
import SvgAnimation from "../../components/SvgAnimation/SvgAnimation";
import { Link } from "react-router-dom";
// import FlimmerLogo from '../../components/flimmerLogo/FlimmerLogo'
function Startpage() {
  return (
    <div className="videoContainer">
      <SvgAnimation />
      <div className="filterOverlay"></div>
      <nav className="navigation">
        <ul>
        <Link className="navLink" to={"/artists"}>
            Artists
          </Link>
          <Link className="navLink" to={"/about"}>
            Contact
          </Link>
          <Link className="navLink" to={"/faq"}>
            FAQ
          </Link>
        </ul>
      </nav>
      <video className="video" autoPlay={true} muted src={loop} loop></video>
    </div>
  );
}

export default Startpage;
