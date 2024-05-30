import { useParams } from 'react-router-dom'
import artists from '../../assets/artists';
import { FaInstagram } from "react-icons/fa";
import Header from '../../components/header/Header';
// import EmailForm from './EmailForm';
function ProfilePage() {
    const {name} = useParams()
    const artist = artists.find( (artistName) => artistName.name === name );
  return (
    <div>
        <Header />
    <div className='profileContainer'>
        <div className="imageComponent"> 
        <img className='artistImg' src={`${artist.image}`} alt="" />
        </div>
        <div className="infoContainer">
            <h1>{artist.name}</h1>
            <a href={`https://www.instagram.com/${artist.instagram}`}><FaInstagram className='icon'/> {artist.instagram.toUpperCase()}</a>
                <div className="interviewContainer">
                {artist.questions.map((question, i) =>{
                   return (
                    <div>
                        <h2>{question}</h2>
                       <p>{artist.answers[i]}</p>
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