import React from 'react'
import videoLogo from "../../assets/videos/flimmer.mp4"
import { Link } from 'react-router-dom'

function FlimmerLogo() {
  return (
    <div className='flimmerContainer'>
      <Link to={"/"}>
         <video
          className="videoFlimmer"
          autoPlay={true}
          muted
          src={videoLogo}
          loop
        ></video>
      </Link>
    </div>
  )
}

export default FlimmerLogo