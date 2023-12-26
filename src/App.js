import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Finance from './pages/Finance';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
      <Route index element={<Home/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/finance' element={<Finance/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
