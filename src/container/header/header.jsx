import React from 'react';
import './header.scss';
import videoBgImg from '../../assets/our-stock-is-rising.jpg'
import videoBgMp4 from '../../assets/our-stock-is-rising.mp4';
// import videoBgOgv from '../../assets/KT-Management-home-screen-video-city.ogv';
// import videoBgWebm from '../../assets/KT-Management-home-screen-video-city.webm';
import {IoIosArrowDown} from "react-icons/io";


const header = () => {
    return (
        <section id='home'>


            <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
            </video>



            {/* Overlay */}
            <div className="home-overlay"></div>

            {/* Header Content */}
            <div className="home-content">
                <div className="home-content-inner text-center">

                    <div className="home-heading">
                        <h1 className="home-heading-1">Our<span> Stock</span></h1><br/>
                        <h1 className="home-heading-2"><span> </span>Is Rising</h1>
                    </div>

                    <div className="home-text">
                        <p>Wall Street in the Classroom</p>
                    </div>

                    <div className="home-btn">
                        <a className="btn btn-general btn-home smooth-scroll" href="/shop" title="Get Represented" role="button">Shop</a>
                    </div>
                </div>
            </div>


            {/*  Arrow Down */}
            <a href="#about" className="arrow-down smooth-scroll">
                <IoIosArrowDown icon="fa-solid fa-angle-down" />
            </a>
        </section>
    );
};

export default header;