import './App.css';
import './Responsive.css';
import './loader';

import React from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Footer} from "./container";
import {Navbar} from "./components";
import ScrollToTop from "./helper/ScrollToTop";

import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Extras from "./pages/Extras";
import History from "./pages/History";
import Purpose from "./pages/Purpose";
import Shop from "./pages/Shop";
import Standards from "./pages/Standards";
import Updates from "./pages/Updates";
const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/gallery/:slug' element={<Gallery/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/updates' element={<Updates/>} />
            <Route path='/purpose' element={<Purpose/>} />
            <Route path='/about' element={<About/>}  />
            <Route path='/history' element={<History/>} />
            <Route path='/extras' element={<Extras/>} />
            <Route path='/contact' element={<Contact/>}  />
            <Route path='/standards/:slug' element={<Standards/>} />
        </Routes>
        <Footer/>


    </>
  );
}

export default App;
