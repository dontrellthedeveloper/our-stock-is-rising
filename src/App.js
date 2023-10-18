import './App.css';
import './Responsive.css';
import './loader';

import React from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import {Header, About, Brands, Standards, Gallery, Services, Media, Team, AddServices} from './container';
import {Footer} from "./container";
import {Navbar} from "./components";
import ScrollToTop from "./helper/ScrollToTop";

import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/gallery/:slug' element={<Gallery/>} exact />
        </Routes>
        <Footer/>


    </>
  );
}

export default App;
