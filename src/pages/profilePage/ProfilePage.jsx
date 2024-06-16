import { useParams } from 'react-router-dom'
import artists from '../../assets/artists';
import { FaInstagram } from "react-icons/fa";
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
// import EmailForm from './EmailForm';


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

function ProfilePage() {
  const isMobile = useIsMobile()
    const {name} = useParams()
  useEffect(()=>{

  },[])

    const artist = artists.find( (artistName) => artistName.name === name );
  return (
    <div>
        <Header />
    <div className={`${isMobile?'MobileProfileContainer':'profileContainer'}`}>
        <div className="imageComponent"> 
        <img lazy className='artistImg' src={`${artist.image}`} alt="artist" />
        </div>
        <div className="infoContainer">
            <h1>{artist.name}</h1>
            <a target='_blank' rel="noreferrer" href={`https://www.instagram.com/${artist.instagram}`}><FaInstagram className='icon'/> {artist.instagram.toUpperCase()}</a>
                <div className="interviewContainer">
                {artist.questions.map((question, i) =>{
                   return (
                    <div>
                        <h2 className='question'>{question}</h2>
                       <p className='answer'>{artist.answers[i]}</p>
                    </div>
                   )
                })}
                </div>
        </div>
    </div>
    </div>
  )
}

export default ProfilePage