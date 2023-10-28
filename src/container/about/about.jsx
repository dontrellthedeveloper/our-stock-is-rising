import React from 'react';
import './about.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdOutlineTipsAndUpdates} from 'react-icons/md'

const about = () => {
    return (
        <section id="about">
            {/* About 02 */}
            <div className="about-02">
                <div className="content-box-main-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <a href="/purpose" style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <AiOutlineLineChart className="react-icon-about"></AiOutlineLineChart>
                                        <h3>Purpose / Objectives</h3>
                                        <hr/>
                                            <p>Purpose: To provide elementary students with a basic understanding of the stock market and its impact on their daily lives. </p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a href="/professional-development" style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>Professional Development</h3>
                                        <hr/>
                                            <p>I Need information to put for professional development. </p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a href="/updates" style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <MdOutlineTipsAndUpdates className="react-icon-about"></MdOutlineTipsAndUpdates>
                                        <h3>Updates</h3>
                                        <hr/>
                                            <p>I Need information to put for updates.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* About 01 */}
            <div className="about-01">
                <div className="content-box-main">
                    <div className="container">
                        <div className="row">

                            {/* About Left Side */}



                            <div className="col-md-4 col-sm-4 homepage-heading-display">
                                <div className="vertical-heading">
                                    <h5>Intro to the</h5>
                                    <h2>Stock <strong></strong><br/>Market</h2>
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
                                <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h5 style={{color: '#000'}}>An Elementary Student's Introduction to the</h5>
                                    <h2> <strong >Stock</strong> Market</h2>
                                </div>
                                    <p className="about-text">Our Stock is Rising" is a classroom activity originally developed in 2000 in response to students' disinterest in the Business section of the local newspaper during a Social Studies current events review.  I took it as a personal challenge to design an ongoing activity that incorporated the basic principles of an elementary curriculum to teach students the fundamentals of the stock market.  The results were overwhelmingly positive!  Students not only gained a basic understanding of business world applications for their grade-level curriculum but through this cooperative learning activity, they also felt a profound sense of inclusion in a future corporate America and international business arenas. </p>

                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                            <a href="https://www.stockmarketgame.org/" title="Read Full" style={{backgroundColor: 'none'}}><span>Play the Stock Market Game</span></a>
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

export default about;