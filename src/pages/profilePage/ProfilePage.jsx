import { useParams } from 'react-router-dom'
import artists from '../../assets/artists';
import { FaInstagram } from "react-icons/fa";
import Header from '../../components/header/Header';
// import EmailForm from './EmailForm';

const isMobile = window.innerWidth <= 768

function ProfilePage() {
    const {name} = useParams()
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