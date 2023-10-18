import React from 'react';
import './about.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaRegEye, FaRegHandshake} from "react-icons/fa";

const about = () => {
    return (
        <section id="about">

                    {/* About 02 */}
                    <div className="about-02">
                <div className="content-box-main-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="about-item text-center about-h">
                                    <AiOutlineLineChart className="react-icon-about"></AiOutlineLineChart>
                                    <h3>Mission</h3>
                                    <hr/>
                                        <p>Create a partnership with brands that provide increased profits and long lasting business relationships. Brands grow and Influencers share in the success of branding.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="about-item text-center about-h">
                                    <FaRegEye className="react-icon-about"></FaRegEye>
                                    <h3>Vision</h3>
                                    <hr/>
                                        <p>We believe that Influencers are the key to successful business growth.  We pair elite influencers with brands that they love so that the experience is organic. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="about-item text-center about-h">
                                    <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                    <h3>Passion</h3>
                                    <hr/>
                                        <p>Our passion is to make a difference and lead by example.  Brands can count on our team to deliver an organic product integration experience.</p>
                                </div>
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

                            <div className="col-md-4 col-sm-4">
                                <div className="vertical-heading">
                                    <h5>Who We Are</h5>
                                    <h2>A <strong>Story</strong><br/>About Us</h2>
                                </div>

                            </div>
                            {/* About Right Side */}

                            <div className="col-md-8 col-sm-8">
                                <div className="about-right">
                                    <p className="about-text">Our Stock is Rising" is a classroom activity originally developed in 2000 in response to students' disinterest in the Business section of the local newspaper during a Social Studies current events review.  I took it as a personal challenge to design an ongoing activity that incorporated the basic principles of an elementary curriculum to teach students the fundamentals of the stock market.  The results were overwhelmingly positive!  Students not only gained a basic understanding of business world applications for their grade-level curriculum but through this cooperative learning activity, they also felt a profound sense of inclusion in a future corporate America and international business arenas </p>
                                    <p className="about-text">My team specializes in bringing brands together for Business Deals! We make sure everybody wins.  Influencer Brands reach and impact more consumers than traditional advertising does.  Merchants, Vendors and Service Providers save millions on marketing and advertising by using influencers to market their products.  Remember, if its not a win/win, it wasn't successful! We make sure Success Happens!</p>
                                </div>
                            </div>
                        </div>

                        {/* About Bottom */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="about-bottom">
                                    <img src={images.aboutLeft} alt="About Us" className="img-responsive"/>
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