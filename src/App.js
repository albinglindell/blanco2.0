// import './App.css';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import Startpage from './pages/startpage/Startpage';
import FlimmerLogo from "./components/flimmerLogo/FlimmerLogo";
import AboutUs from './pages/aboutUs/AboutUs';
import Faq from './pages/faq/Faq';
import Artists from './pages/artists/Artists';

function App() {
  return (
    <div className="App">
      <FlimmerLogo />
      <Routes>
          <Route  path='/' element={< Startpage/>}/>
          <Route  path='/artists' element={<Artists />}/>
          <Route  path='/about' element={<AboutUs />}/>
          <Route  path='/faq' element={<Faq />}/>
      </Routes>
    </div>
  );
}

export default App;
