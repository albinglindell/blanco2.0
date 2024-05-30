// import './App.css';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import Startpage from './pages/startpage/Startpage';
import FlimmerLogo from "./components/flimmerLogo/FlimmerLogo";
import AboutUs from './pages/aboutUs/AboutUs';
import Faq from './pages/faq/Faq';
import Artists from './pages/artists/Artists';
import ProfilePage from './pages/profilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route  path='/' element={< Startpage/>}/>
          <Route  path='/artists' element={<Artists />}/>
          <Route  path='/faq' element={<Faq />}/>
          <Route  path='/:name' element={<ProfilePage />}/>
      </Routes>
    </div>
  );
}

export default App;
