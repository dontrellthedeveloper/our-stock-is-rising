import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight,
    FaInstagram, FaRegEye, FaRegHandshake,
    FaTiktok,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import {images} from "../constants";

import './scss/Gallery.scss';

import {Services, Statement, About as AboutSection, Brands} from "../container";


import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";
import videoBgMp4 from "../assets/our-stock-is-rising.mp4";
import {AiOutlineLineChart} from "react-icons/ai";
import { IoIosArrowDown } from 'react-icons/io';





function Purpose() {
    const [purpose, setPurpose] = useState(null);
    // const [services, setServices] = useState(null);
    const {slug} = useParams();




    useEffect(() => {
        client.fetch(`*[_type == "purpose" && slug.current == 'purpose']{
            name,
            _id,
            slug,
            preheading,
            heading,
            description,
            name2,
            preheading2,
            heading2,
            description2,
            imageUrl{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl2{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data) => setPurpose(data[0]))
            .catch(console.error)
    }, [slug]);






    // useEffect(() => {
    //     client.fetch(`*[_type == "service"] | order(order asc)`

    //     ).then((data) => {
    //         setServices(data)
    //     })

    // }, []);






    if(!purpose) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )
    // if(!services) return <div>Loading.....</div>


    return (
        <>

            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>
                <div id="home-overlay-2"></div>
            </section>

            <div className="map-color-3" >
                <div className="row" style={{marginRight: '0'}}>
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {purpose.name}
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <section id="about" style={{height: 'calc(100vh - 140px)', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Left Side */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img src={urlFor(purpose.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">
                                            {/* <div className="portfolio-item-details text-center">
                                                {singleTeamMember.imageTitle2 && (
                                                    <>
                                                        <h3>{singleTeamMember.imageTitle2}</h3>
                                                        <span></span>
                                                    </>
                                                )}

                                                {singleTeamMember.imageDescription2 && (
                                                    <p className='influencer-description'>{singleTeamMember.imageDescription2}</p>
                                                )}

                                                <div className='show-button'>
                                                    {singleTeamMember.instagramLink && (
                                                        <a href={singleTeamMember.instagramLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                <FaInstagram/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.facebookLink && (
                                                        <a href={singleTeamMember.facebookLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-facebook'>
                                                                <FaFacebookF/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.twitterLink && (
                                                        <a href={singleTeamMember.twitterLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-twitter'>
                                                                <FaTwitter/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.youtubeLink && (
                                                        <a href={singleTeamMember.youtubeLink}
                                                            target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-youtube'>
                                                                <FaYoutube/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.tiktokLink && (
                                                        <a href={singleTeamMember.tiktokLink}
                                                            target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-tiktok'>
                                                                <FaTiktok/>
                                                            </button>
                                                        </a>
                                                    )}
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>


                            </div>
                            
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>{purpose.preheading}</h5>
                                        <h2> <strong ></strong>{purpose.heading}</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>


                                    <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>{purpose.description}  </p>

                                    

                                    {/* <div className='show-button-page'>

                                        <hr style={{margin: '1rem'}}/>
                                    
                                        <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                            <div class="card-link-b" style={{padding: '7px', borderTop: '0', }}>
                                                <a href="#" title="Read Full" style={{backgroundColor: 'none'}}><span>More Info About Our Program</span></a>
                                            </div>
                                        </div>

                                        <hr style={{margin: '1rem'}}/>

                                    </div> */}
                                                                   
                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>
                       

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/*  Arrow Down */}
            <a href="#about" className="arrow-down smooth-scroll" style={{color: '#213805'}}>
                <IoIosArrowDown icon="fa-solid fa-angle-down" />
            </a>

            </section>

            <div className="map-color-3" >
                <div className="row" style={{marginRight: '0'}}>
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {purpose.name2}
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" style={{height: 'calc(100vh - 140px)', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>

                            
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>{purpose.preheading2}</h5>
                                        <h2> <strong ></strong>{purpose.heading2}</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>


                                    <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>{purpose.description2}  </p>

                            
                           
                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>
                             

                                </div>
                            </div>

                            {/* Left Side */}
                            <div className="col-md-6 col-sm-6 col-mobile" style={{display: 'table'}}>
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img src={urlFor(purpose.imageUrl2).width(800).height(800).url()} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">
                                            {/* <div className="portfolio-item-details text-center">
                                                {singleTeamMember.imageTitle2 && (
                                                    <>
                                                        <h3>{singleTeamMember.imageTitle2}</h3>
                                                        <span></span>
                                                    </>
                                                )}

                                                {singleTeamMember.imageDescription2 && (
                                                    <p className='influencer-description'>{singleTeamMember.imageDescription2}</p>
                                                )}

                                                <div className='show-button'>
                                                    {singleTeamMember.instagramLink && (
                                                        <a href={singleTeamMember.instagramLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                <FaInstagram/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.facebookLink && (
                                                        <a href={singleTeamMember.facebookLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-facebook'>
                                                                <FaFacebookF/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.twitterLink && (
                                                        <a href={singleTeamMember.twitterLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-twitter'>
                                                                <FaTwitter/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.youtubeLink && (
                                                        <a href={singleTeamMember.youtubeLink}
                                                            target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-youtube'>
                                                                <FaYoutube/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {singleTeamMember.tiktokLink && (
                                                        <a href={singleTeamMember.tiktokLink}
                                                            target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-tiktok'>
                                                                <FaTiktok/>
                                                            </button>
                                                        </a>
                                                    )}
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

      
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Statement/>



        </>
    );
}

export default Purpose;