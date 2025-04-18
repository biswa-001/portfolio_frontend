import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/navbar.js';
import Homepage from './Components/home/homepage.js';
import Aboutpage from './Components/about/aboutpage';
import Projectpage from './Components/Project/projectpage';
import Contractpage from './Components/contract/contractPage';
import Footer from './Components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
<div className="app-layout">
<Navbar/>
<div className="content">
<Routes>
<Route  path='/' element={<Homepage/>}/>
<Route  path='/about' element={<Aboutpage/>}/>
<Route  path='/project' element={<Projectpage/>}/>
<Route  path='/contract' element={<Contractpage/>}/>
</Routes>
</div>
<Footer/>
</div>
</BrowserRouter>

  
  
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


