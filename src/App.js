import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Recepie from './pages/Recepie';
import NavBar from './components/NavBar';
import SingleRecipe from './pages/SingleRecipe';

import { Box } from '@mui/material';
function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/recepie" element={<Recepie/>}></Route>
            <Route path="/singleRecipe/:id" element={<SingleRecipe />} />
          </Routes>
      </BrowserRouter>
     

      
    </div>
  );
}

export default App;
