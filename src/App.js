
import './App.css';
import Amazingviews from './components/Views/Amazingviews';
import Amazingpool from './components/Views/Amazingpool';
import Beach from './components/Views/Beach';
import Farms from './components/Views/Farms';
import Lakefront from './components/Views/Lakefront';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';




function App() {
  
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/amazingview' exact element={<Amazingviews/>} />
    <Route path='/farms' exact element={<Farms/>} />
    <Route path='/' exact element={<Amazingpool/>} />
    <Route path='/beach' exact element={<Beach/>} />
    <Route path='/lakefront' exact element={<Lakefront/>} />
    </Routes>
   
    <Footer/>
    </Router>
    
  );
}

export default App;
