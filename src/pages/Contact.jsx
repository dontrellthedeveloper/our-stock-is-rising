import React, {useState, useEffect} from 'react';
import {
    FaAmazon,
    FaFacebookF, FaGooglePlus, FaHandPointRight,
    FaInstagram, FaLinkedin, FaRegEye, FaRegHandshake,
    FaShoppingCart,
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

import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


function Contact() {
    const [singleTeamMember, setSingleTeamMember] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();

    const defaultProps = {
        center: {
          lat: 39.758949,
          lng: -84.191605
        },
        zoom: 11
      };


    useEffect(() => {
        client.fetch(`*[_type == "about" && slug.current == 'about']{
            name,
            _id,
            slug,
            instagramLink,
            facebookLink,
            twitterLink,
            youtubeLink,
            tiktokLink,
            description,
            about1,
            about2,
            companyGoalName,
            companyGoalDescription,
            companyGoalName2,
            companyGoalDescription2,
            companyGoalName3,
            companyGoalDescription3,
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
            },
            imageUrl3{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data) => setSingleTeamMember(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!singleTeamMember || !services) return (
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
                            Contact
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
                            <div className="col-md-6 col-sm-12">
                                {/* <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
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
                                            </div>

                                        </div>
                                    </div>
                                </div> */}

                                <div style={{ height: '50vh', width: '100%' }}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
                                                defaultCenter={defaultProps.center}
                                                defaultZoom={defaultProps.zoom}
                                            >
                                                <AnyReactComponent
                                                lat={39.758949}
                                                lng={-84.191605}
                                                text=""
                                                />
                                            </GoogleMapReact>
                                </div>
                            </div>
                            
                            {/* Right Side */}
                            <div className="col-md-6 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>More Info?</h5>
                                        <h2> <strong ></strong>Contact Us</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>

                                    <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>Info on Business Card </p>

                                    

                                    <div className='show-button-page'>

                                        <hr style={{margin: '1rem'}}/>
                                    
                                        {/* <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                            <div class="card-link-b" style={{padding: '7px', borderTop: '0', }}>
                                                <a href="#" title="Read Full" style={{backgroundColor: 'none'}}><span>Contact Us</span></a>
                                            </div>
                                        </div> */}

                                        {singleTeamMember.instagramLink && (
                                            <a href={singleTeamMember.instagramLink} target='_blank'>
                                                <button className='btn btn-social-i btn-linkedIn'>
                                                    {/* <FaInstagram/> */}
                                                    {/* <FaAmazon/> */}
                                                    <FaLinkedin/>
                                                </button>
                                            </a>
                                        )}


                                        {singleTeamMember.facebookLink && (
                                            <a href={singleTeamMember.facebookLink} target='_blank'>
                                                <button className='btn btn-social-i-f btn-facebook'>
                                                    <FaFacebookF/>
                                                </button>
                                            </a>
                                        )}

                                        {singleTeamMember.instagramLink && (
                                            <a href={singleTeamMember.instagramLink} target='_blank'>
                                                <button className='btn btn-social-i btn-instagram'>
                                                    {/* <FaInstagram/> */}
                                                    {/* <FaAmazon/> */}
                                                    <FaInstagram/>
                                                </button>
                                            </a>
                                        )}

                                        {singleTeamMember.tiktokLink && (
                                            <a href={singleTeamMember.tiktokLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-tiktok'>
                                                    <FaTiktok/>
                                                </button>
                                            </a>
                                        )}


                                        {singleTeamMember.youtubeLink && (
                                            <a href={singleTeamMember.youtubeLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-youtube'>
                                                    <FaYoutube/>
                                                </button>
                                            </a>
                                        )}

                                        {singleTeamMember.youtubeLink && (
                                            <a href={singleTeamMember.youtubeLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-google'>
                                                    <FaGooglePlus/>
                                                </button>
                                            </a>
                                        )}


                                        <hr style={{margin: '1rem'}}/>

                                    </div>
                                                               
                                    <hr className='show-break-style'/>
                                    <div className='template-p-detail'>
                                            Do you have a question? Please email
                                            <a
                                        className='email__design-s'
                                        href='mailto:gpowell@ourstockisrising.com'
                                        target='_blank'> gpowell@ourstockisrising.com</a>
                                    </div>                          
                                    <hr className='show-break-style'/>

                                    <div className='template-p-detail'>
                                            {/* You can also reach us by phone */}
                                            <a
                                        className='email__design-s'
                                        href='tel:+1-937-555-1212'
                                        target='_blank'> (937) 555-1212</a>
                                    </div>   
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


            <Statement/>

            <section id="" style={{display: 'none'}} >
                <div className="content-box-md-interact">
                    <div className="">
                        <div className="map-color-6">
                            <div className="container" style={{height: '600px', display: 'table', verticalAlign: 'middle'}}>
                                <div className="row">
                                    <div id="content">
                                        <section id="map-section" className="inner over client-section-b">
                                            <div className="row-show port-popup show-page-image-s">
                                                {singleTeamMember.imageUrl2 && (
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleTeamMember.imageUrl2).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}
                                                {/* <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                    <div className="portfolio-item">
                                                        <img src={urlFor(singleTeamMember.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                        <div className="portfolio-item-overlay margin-top-g">
                                                            <div className="portfolio-item-details text-center">
                                        
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                {singleTeamMember.imageUrl3 && (
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleTeamMember.imageUrl3).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}
                                            </div>
                                            <div className="desc map-color-7 container-paragraph influencer-info">
                                                <div className="map-paragraph">
                                                    <h2 className="i-map-paragraph"><b className='show-page-name-s'>{singleTeamMember.name}</b></h2>
                                                    <div className='show-button'>


                                                        {singleTeamMember.instagramLink && (
                                                            <a href={singleTeamMember.instagramLink} target='_blank'>
                                                                <button className='btn btn-social-i btn-instagram'>
                                                                    <FaInstagram/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.facebookLink && (
                                                            <a href={singleTeamMember.facebookLink} target='_blank'>
                                                                <button className='btn btn-social-i-f btn-facebook'>
                                                                    <FaFacebookF/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.twitterLink && (
                                                            <a href={singleTeamMember.twitterLink} target='_blank'>
                                                                <button className='btn btn-social-i-t btn-twitter'>
                                                                    <FaTwitter/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.youtubeLink && (
                                                            <a href={singleTeamMember.youtubeLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i-y btn-youtube'>
                                                                    <FaYoutube/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.tiktokLink && (
                                                            <a href={singleTeamMember.tiktokLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i btn-tiktok'>
                                                                    <FaTiktok/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        <hr />

                                                        <div className='template-p-detail'>
                                                            {singleTeamMember.description}
                                                        </div>

                                                        <hr/>
                                                    </div>
                            
                                                    <hr className='show-break-style'/>
                                                    <div className='template-p-detail'>

                                                         <a
                                                        className='email__design-s'
                                                        href='mailto:shawn@ktmanagers.com'
                                                        target='_blank'>shawn@ktmanagers.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contact;

