import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Prices from './pages/Prices'
import Training from './pages/Training'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/prices" element={<Prices />}/>
      <Route path="/training" element={<Training />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
