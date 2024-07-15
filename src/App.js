// import './App.css';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import Startpage from './pages/startpage/Startpage';
import Faq from './pages/faq/Faq';
import Artists from './pages/artists/Artists';
import ProfilePage from './pages/profilePage/ProfilePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route  path='/' element={< Startpage/>}/>
          <Route  path='/artists' element={<Artists />}/>
          <Route  path='/faq' element={<Faq />}/>
          <Route  path='/:name' element={<ProfilePage />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
