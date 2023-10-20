import React from 'react';
import './history.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";

const history = () => {
    return (
        <section id="about">

                    {/* About 02 */}

            {/* About 01 */}
            <div className="about-01">
                <div className="content-box-main">
                    <div className="container">
                        <div className="row">

                            {/* About Left Side */}



                            <div className="col-md-4 col-sm-4">
                                <div className="vertical-heading">
                                    <h5>Who We Are</h5>
                                    <h2>A <strong>Story</strong><br/>About Us</h2>
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

                            <div className="col-md-8 col-sm-8">
                                <div className="about-right">
                                {/* <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                    <h5 style={{color: '#000'}}>An Elementary Student's Introduction to the</h5>
                                    <h2 style={{color: '#000'}}> <strong >Stock</strong> Market</h2>
                                </div> */}

                                <div className="horizontal-heading main-about-p" style={{color: '#000'}}>
                                        <h3 style={{color: '#000'}}>Our History</h3>
                                        {/* <h2 style={{color: '#000'}}> <strong >Stock</strong> Market</h2> */}
                                    </div>

                                    <p className="about-text">From 2016 - 2018, my stock market teams at Dayton Boys Preparatory Academy garnered five top-ten finishes in the Elementary Division of the Ohio Stock Market Game.  They competed against more than 100 teams each time out, including some of the most prestigious private and Catholic schools in the state.  In 2017, our sixth-grade team presented at Wright State University's Annual Network for Educational Renewal Conference.  Later that spring, they were invited and presented at a Dayton City Commissioners Meeting that was broadcast on YouTube.  In 2018, one of our sixth-grade teams finished 8th in the state after spending an unprecedented 13 weeks at the top!  You can see them at work in the video below.</p>
                                    <p className="about-text">A presentation of Our Stock Is Rising was well received at Fairborn Ohio's Innovations in Learning Conference in February 2020. We look forward to presentations at more school districts following the lifting of COVID-19 restrictions.</p>


                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                            <a href="#" title="Read Full" style={{backgroundColor: 'none'}}><span>Read Full</span></a>
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

export default history;