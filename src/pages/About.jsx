import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaGooglePlus, FaHandPointRight,
    FaInstagram, FaLinkedin, FaRegEye, FaRegHandshake,
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


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function About() {
    const [about, setAbout] = useState(null);
    const [social, setSocial] = useState(null);
    const {slug} = useParams();




    useEffect(() => {
        client.fetch(`*[_type == "about" && slug.current == 'about']{
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
        }`).then((data) => setAbout(data[0]))
            .catch(console.error)
    }, [slug]);

    useEffect(() => {
        client.fetch(`*[_type == "social"]{
            _id,
            linkedLink,
            instagramLink,
            facebookLink,
            youTubeLink,
            tiktokLink,
            googlePlus
        }`).then((data) => setSocial(data[0]))
            .catch(console.error)
    }, [slug]);

    console.log(about)





    // useEffect(() => {
    //     client.fetch(`*[_type == "social"]`

    //     ).then((data) => {
    //         setSocial(data)
    //     })

    // }, []);






    if(!about || !social) return (
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
                            {about.name}
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <section id="about" style={{paddingTop: '120px', paddingBottom: '120px', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Left Side */}
                            <div className="col-md-4 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img src={urlFor(about.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">

                                                <div className='show-button'>
                                                    {social.instagramLink && (
                                                        <a href={social.instagramLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                <FaInstagram/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {social.facebookLink && (
                                                        <a href={social.facebookLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-facebook'>
                                                                <FaFacebookF/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {/* {singleTeamMember.twitterLink && (
                                                        <a href={singleTeamMember.twitterLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-twitter'>
                                                                <FaTwitter/>
                                                            </button>
                                                        </a>
                                                    )} */}

                                                    {social.youTubeLink && (
                                                        <a href={social.youTubeLink}
                                                            target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-youtube'>
                                                                <FaYoutube/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {social.tiktokLink && (
                                                        <a href={social.tiktokLink}
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
                                </div>


                            </div>
                            
                            {/* Right Side */}
                            <div className="col-md-8 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>{about.preheading}</h5>
                                        <h2> <strong ></strong>{about.heading}</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>


                                    <p className="about-text" style={{marginLeft: '20px', marginRight: '20px'}}>
                                    <ReactMarkdown 
                                                children={about.description} 
                                                remarkPlugins={[remarkGfm]}   
                                                /> 
               
                                    </p>

                                    

                                    <div className='show-button-page'>

                                        <hr style={{margin: '0.5rem'}}/>
                                    
                                        {social.linkedLink && (
                                            <a href={social.linkedLink} target='_blank'>
                                                <button className='btn btn-social-i btn-linkedIn'>
                                                    {/* <FaInstagram/> */}
                                                    {/* <FaAmazon/> */}
                                                    <FaLinkedin/>
                                                </button>
                                            </a>
                                        )}


                                        {social.facebookLink && (
                                            <a href={social.facebookLink} target='_blank'>
                                                <button className='btn btn-social-i-f btn-facebook'>
                                                    <FaFacebookF/>
                                                </button>
                                            </a>
                                        )}

                                        {social.instagramLink && (
                                            <a href={social.instagramLink} target='_blank'>
                                                <button className='btn btn-social-i btn-instagram'>
                                                    {/* <FaInstagram/> */}
                                                    {/* <FaAmazon/> */}
                                                    <FaInstagram/>
                                                </button>
                                            </a>
                                        )}

                                        {social.tiktokLink && (
                                            <a href={social.tiktokLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-tiktok'>
                                                    <FaTiktok/>
                                                </button>
                                            </a>
                                        )}


                                        {social.youTubeLink && (
                                            <a href={social.youTubeLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-youtube'>
                                                    <FaYoutube/>
                                                </button>
                                            </a>
                                        )}

                                        {social.googlePlus && (
                                            <a href={social.googlePlus}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-google'>
                                                    <FaGooglePlus/>
                                                </button>
                                            </a>
                                        )}

                                        <hr style={{margin: '0.5rem'}}/>

                                    </div>
                                    
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map-color-3" >
                <div className="row" style={{marginRight: '0'}}>
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> 
                            {about.name2}
                            </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" style={{paddingTop: '120px', paddingBottom: '120px', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                    <div className="row col-mobile-top" style={{justifyContent: 'center'}}>

                            
                            {/* Right Side */}
                            <div className="col-md-8 col-sm-12" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>{about.preheading2}</h5>
                                        <h2> <strong ></strong>{about.heading2}</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>


                                    <p className="about-text" style={{marginLeft: '20px', marginRight: '20px'}}>
                                    <ReactMarkdown 
                                                children={about.description2} 
                                                remarkPlugins={[remarkGfm]}   
                                                /> 

                                    </p>

                                    

                                    <div className='show-button-page'>

                                        <hr style={{margin: '0.5rem'}}/>
                                    
                                        {social.linkedLink && (
                                            <a href={social.linkedLink} target='_blank'>
                                                <button className='btn btn-social-i btn-linkedIn'>
                                                    {/* <FaInstagram/> */}
                                                    {/* <FaAmazon/> */}
                                                    <FaLinkedin/>
                                                </button>
                                            </a>
                                        )}


                                        {social.facebookLink && (
                                            <a href={social.facebookLink} target='_blank'>
                                                <button className='btn btn-social-i-f btn-facebook'>
                                                    <FaFacebookF/>
                                                </button>
                                            </a>
                                        )}

                                        {social.instagramLink && (
                                            <a href={social.instagramLink} target='_blank'>
                                                <button className='btn btn-social-i btn-instagram'>
                                                    {/* <FaInstagram/> */}
                                                    {/* <FaAmazon/> */}
                                                    <FaInstagram/>
                                                </button>
                                            </a>
                                        )}

                                        {social.tiktokLink && (
                                            <a href={social.tiktokLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i btn-tiktok'>
                                                    <FaTiktok/>
                                                </button>
                                            </a>
                                        )}


                                        {social.youTubeLink && (
                                            <a href={social.youTubeLink}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-youtube'>
                                                    <FaYoutube/>
                                                </button>
                                            </a>
                                        )}

                                        {social.googlePlus && (
                                            <a href={social.googlePlus}
                                            target='_blank'>
                                                <button className='btn btn-social-i-y btn-google'>
                                                    <FaGooglePlus/>
                                                </button>
                                            </a>
                                        )}

                                        <hr style={{margin: '0.5rem'}}/>

                                    </div>
                                    
                                    <div className="desc map-color-7 container-paragraph influencer-info" style={{display: 'none'}}>
                                        <div className="map-paragraph">
                                            <h2 className="i-map-paragraph"><b className='show-page-name-s'>{about.name2}</b></h2>
                                                <div className='show-button'>


                                                    <hr />

                                                    <div className='template-p-detail'>
                                                        {about.description}
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
                                                                        

                                </div>
                            </div>

                            {/* Left Side */}
                            <div className="col-md-4 col-sm-6 col-mobile">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                    <div className="portfolio-item">
                                        <img src={urlFor(about.imageUrl2).width(800).height(800).url()} className="influencer-image-2" alt=""/>
                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">


                                                <div className='show-button'>
                                                  
                                                </div>
                                            </div>
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

export default About;