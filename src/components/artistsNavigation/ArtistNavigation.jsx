import React, { useState } from 'react'
import artists from "../../assets/artists"
import { Link } from 'react-router-dom';
console.log(artists)
function ArtistNavigation() {
    const [hover, setHover] = useState(false)
    const [hoveredArtistId, setHoveredArtistId] = useState(null);

  return (
    <div className='artistsContainer'>
        {
            artists.map((a, i) => {
                return (
                    <Link className='link' to={`/${a.name}#contentSection`}>
                    <div className="singleArtistContainer" 
                         onMouseOver={() => setHoveredArtistId(i)}
                         onMouseOut={() => setHoveredArtistId(null)}>
                        <h2>{a.name}</h2>
                        {hoveredArtistId === a.id && <div className="imageAndOverlay"><img className={`artist-${a.id} hover-image`} src={a.image}></img><div className='darkOverlay'></div></div> }
                    </div>
                    </Link>
                );
            })
        }
    </div>
  )
}

export default ArtistNavigation