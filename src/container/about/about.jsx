import React, { useEffect, useState } from 'react';
import './about.scss'

import {images} from "../../constants";
import {AiOutlineLineChart} from "react-icons/ai";
import {FaFacebookF, FaInstagram, FaRegEye, FaRegHandshake, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdOutlineTipsAndUpdates} from 'react-icons/md'
import {urlFor, client} from "../../client";

const About = () => {



    const [about, setAbout] = useState([]);

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
        }`).then((data) => setAbout(data[0]))
            .catch(console.error)
    }, []);

    if(!about) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )



    return (
        <section id="about">
            {/* About 02 */}
            <div className="about-02">
                <div className="content-box-main-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <a href={about.boxLink} style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <AiOutlineLineChart className="react-icon-about"></AiOutlineLineChart>
                                        <h3>{about.boxheading}</h3>
                                        <hr/>
                                            <p>{about.boxtext}</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a href={about.boxLink2} style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>{about.boxheading2}</h3>
                                        <hr/>
                                            <p>{about.boxtext2}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <a href={about.boxLink3} style={{textDecoration: 'none'}}>
                                    <div className="about-item text-center about-h">
                                        <MdOutlineTipsAndUpdates className="react-icon-about"></MdOutlineTipsAndUpdates>
                                        <h3>{about.boxheading3}</h3>
                                        <hr/>
                                            <p>{about.boxtext3}</p>
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
                                    {/* <h5>Intro to the</h5>
                                    <h2>Stock <strong></strong><br/>Market</h2> */}
                                    <h5>{about.secSubheading}</h5>
                                    <h2 style={{width: '150px'}}>{about.secSubHeading2}</h2>
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
                                    <h5 style={{color: '#000'}}>{about.secPreheading}</h5>
                                    <h2> {about.secHeading}</h2>
                                </div>
                                    <p className="about-text">{about.secDescription} </p>

                                    <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                        <div class="card-link" style={{padding: '7px', borderTop: '0', }}>
                                            <a href={about.secLink} title="Read Full" style={{backgroundColor: 'none'}}><span>{about.secLinkText}</span></a>
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

export default About;