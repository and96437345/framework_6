import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import TownInformation from './pages/TownInformation';
import MostPlace from './pages/MostPlace';
import OtherPlaces from './pages/OtherPlaces';
import TownPhotos from './pages/TownPhotos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<MainPage />}/>
          <Route path='/townInformation' element={<TownInformation />}/>
          <Route path='/mostPlace' element={<MostPlace />}/>
          <Route path='/otherPlaces' element={<OtherPlaces />}/>
          <Route path='/townPhotos' element={<TownPhotos />}/>    
        </Routes>       
      </div>
    </Router>
    
  );
}

export default App;