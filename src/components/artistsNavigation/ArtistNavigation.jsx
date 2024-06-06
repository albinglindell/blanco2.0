import React, { useState } from 'react'
import artists from "../../assets/artists"
import { Link } from 'react-router-dom';
console.log(artists)
function ArtistNavigation() {
    const [hoveredArtistId, setHoveredArtistId] = useState(null);

    return (
        <div className='artistsContainer'>
            {artists.map((a, i) => (
                <Link onFocusCapture={()=> setHoveredArtistId(i)} key={i} className='link' to={`/${a.name}#contentSection`}>
                    <div
                        className="singleArtistContainer"
                        onMouseOver={() => setHoveredArtistId(i)} 
                        onMouseOut={() => setHoveredArtistId(null)}
                    >
                        <h2>{a.name}</h2>
                        <div className={`imageAndOverlay ${hoveredArtistId === i ? 'visible' : ''}`}>
                            <img className={`artist-${a.id} hover-image`} src={a.square} alt={`${a.name} overlay`} />
                            <div className='darkOverlay'></div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ArtistNavigation