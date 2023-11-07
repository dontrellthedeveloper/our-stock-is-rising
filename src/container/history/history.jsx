import React, { useEffect, useState } from 'react';
import './history.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import { client } from '../../client';

const History = () => {


    const [history, setHistory] = useState([]);

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
        }`).then((data) => setHistory(data[0]))
            .catch(console.error)
    }, []);

    if(!history) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )


    return (
        <section id="about">

                    {/* About 02 */}

            {/* About 01 */}
            <div className="about-01">
                <div className="content-box-main">
                    <div className="container">
                        <div className="row">

                            {/* About Left Side */}



                            <div className="col-md-4 col-sm-4 homepage-heading-display">
                            <div className="vertical-heading">
                                    {/* <h5>Intro to the</h5>
                                    <h2>Stock <strong></strong><br/>Market</h2> */}
                                    <h5>{history.sec3Subheading}</h5>
                                    <h2 style={{width: '150px'}}>{history.sec3SubHeading2}</h2>
                                </div>


                                {/* <div className="vertical-heading">
                                    <h5>Who We Are</h5>
                                    <h2>A <strong>Story</strong><br/>About Us</h2>
                                </div>

                                <div className="vertical-heading">
                                    <h5>Who We Are</h5>
                                    <h2>A <strong>Story</strong><br/>About Us</h2>
                                </div> */}
                            </div>

                            
                            {/* About Right Side */}

                            <div className="col-md-8 col-sm-12">
                                <div className="about-right">
                                {/* <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h5 style={{color: '#000'}}>An Elementary Student's Introduction to the</h5>
                                    <h2 style={{color: '#000'}}> <strong >Stock</strong> Market</h2>
                                </div> */}

                                <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h5 style={{color: '#000'}}>{history.sec3Preheading}</h5>
                                    <h2> {history.sec3Heading}</h2>
                                </div>

                                {/* <div className="horizontal-heading main-about-p" style={{color: '#000'}}>
                                        <h3 style={{color: '#000'}}>Our History</h3>
                                    </div> */}

                                    <p className="about-text">{history.sec3Description} </p>

                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                            <a href={history.sec3Link} title="Read Full" style={{backgroundColor: 'none'}}><span>{history.sec3LinkText}</span></a>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>

                        {/* About Bottom */}
                        <div className="row" style={{display: 'none'}}>
                            <div className="col-md-12">
                                <div className="about-bottom">


                                                        <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                            <div className="portfolio-item">
                                                                <img src={images.logo} className="influencer-image-2" alt=""/>

                                                                <div className="portfolio-item-overlay margin-top-g">
                                                                    <div className="portfolio-item-details text-center">
                                                                        {/*Item Header*/}
                                                                        {/* {singleTeamMember.imageTitle2 && ( */}
                                                                            <>
                                                                                <h3>
                                                                                Test
                                                                                {/* {singleTeamMember.imageTitle2} */}
                                                                                </h3>
                                                                                {/*Item Strips*/}
                                                              
                                                                                <span></span>
                                                                            </>

                                                                        {/* )} */}

                                                                        {/*Item Description */}
                                                                        {/* {singleTeamMember.imageDescription2 && (
                                                                            <p className='influencer-description'>{singleTeamMember.imageDescription2}</p>
                                                                        )} */}

                                                                        <div className='show-button'>

                                                                            {/* {singleTeamMember.instagramLink && ( */}
                                                                                <a href='' target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                        <FaInstagram/>
                                                                                    </button>
                                                                                </a>
                                                                            {/* )} */}

                                                                            {/* {singleTeamMember.facebookLink && ( */}
                                                                                <a href='' target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                        <FaFacebookF/>
                                                                                    </button>
                                                                                </a>
                                                                            {/* )} */}

                                                                            {/* {singleTeamMember.twitterLink && ( */}
                                                                                <a href='' target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                        <FaTwitter/>
                                                                                    </button>
                                                                                </a>
                                                                            {/* )} */}

                                                                            {/* {singleTeamMember.youtubeLink && ( */}
                                                                                <a href=''
                                                                                   target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                        <FaYoutube/>
                                                                                    </button>
                                                                                </a>
                                                                            {/* )} */}

                                                                            {/* {singleTeamMember.tiktokLink && ( */}
                                                                                <a href=''
                                                                                   target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                        <FaTiktok/>
                                                                                    </button>
                                                                                </a>
                                                                            {/* )} */}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>


                                {/* <img src={images.aboutLeft} alt="About Us" className="img-responsive about__image-section"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default History;