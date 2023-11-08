import React, { useEffect, useState } from 'react';
import './header.scss';
import videoBgImg from '../../assets/our-stock-is-rising.jpg'
import videoBgMp4 from '../../assets/our-stock-is-rising2.mp4';
// import videoBgOgv from '../../assets/KT-Management-home-screen-video-city.ogv';
// import videoBgWebm from '../../assets/KT-Management-home-screen-video-city.webm';
import {IoIosArrowDown} from "react-icons/io";
import { images } from "../../constants";

import {urlFor, client} from "../../client";


const Header = () => {


    const [banner, setBanner] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "homepage"] | order(orderRank) {
            tagline,
            _id,
            hpbuttonLink,
            hpbuttonText,
            boxheading,
            boxtext,
            boxLink,
            boxheading2,
            boxtext2,
            boxLink2,
            boxheading3,
            boxtext3,
            boxLink3,
            secPreheading,
            secHeading,
            secDescription,
            secLink,
            secLinkText,
            secSubheading,
            secSubHeading2,
            sec2Preheading,
            sec2Heading,
            sec2Description,
            sec2Link,
            sec2LinkText,
            sec2Subheading,
            sec2SubHeading2,
            sec3Preheading,
            sec3Heading,
            sec3Description,
            sec3Link,
            sec3LinkText,
            sec3Subheading,
            sec3SubHeading2,
            statement,
            footerPreheading,
            footerHeading,
            footerDescription,
            footerCopyriight
        }`).then((data) => setBanner(data[0]))
            .catch(console.error)
    }, []);

    if(!banner) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )



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
                        {/* <h1 className="home-heading-1">Our<span> Stock</span></h1><br/>
                        <h1 className="home-heading-2"><span> </span>Is Rising</h1> */}
                        <img src={images.hptext} alt="logo" />
                    </div>

                    <div className="home-text">
                        <p>{banner.tagline}</p>
                    </div>

                    <div className="home-btn">
                        <a className="btn btn-general btn-home smooth-scroll" href={banner.hpbuttonLink} title={banner.hpbuttonText} role="button">{banner.hpbuttonText}</a>
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

export default Header;