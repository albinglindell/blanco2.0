import React from 'react'
import artists from '../../assets/artists'
import { Link } from 'react-router-dom'

function Artists() {
  return (
    <div className='artistsComponent'>
    <h1 className='artistHeading'>Tattoo artists</h1>
    <div className="artistPictureContainer">
        {artists.map(artist => { 
          return(
              <Link className='link' to={`/${artist.name}#contentSection`}>
                <img lazy className='artistImg' src={`${artist.image_sm}`}alt="artist" />
                <h2>{`${artist.name}`}</h2>
              </Link>
          )
        })}
    </div>
  </div>
    )
}

export default Artists