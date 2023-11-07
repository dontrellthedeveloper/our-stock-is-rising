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

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() {
    const [contact, setContact] = useState(null);
    const [social, setSocial] = useState(null);
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
        client.fetch(`*[_type == "contact" && slug.current == 'contact']{
            name,
            _id,
            preheading,
            heading,
            description,
            footerText,
            footerEmail,
            footerPhone,
        }`).then((data) => setContact(data[0]))
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





    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!contact || !social) return (
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
                            {contact.name}
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
                                        <h5 style={{color: '#000'}}>{contact.preheading}</h5>
                                        <h2> <strong ></strong>{contact.heading}</h2>
                                    </div>

                                    <hr style={{margin: '2rem', border: '2px solid #213805'}}/>

                                    <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>
                                    
                                    
                                    <ReactMarkdown 
                                                children={contact.description}  
                                                remarkPlugins={[remarkGfm]}   
                                                /> 
                                    </p>

                                    

                                    <div className='show-button-page'>

                                        <hr style={{margin: '1rem'}}/>
                                    
                                        {/* <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                            <div class="card-link-b" style={{padding: '7px', borderTop: '0', }}>
                                                <a href="#" title="Read Full" style={{backgroundColor: 'none'}}><span>Contact Us</span></a>
                                            </div>
                                        </div> */}
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


                                        <hr style={{margin: '1rem'}}/>

                                    </div>
                                                               
                                    <hr className='show-break-style'/>
                                    <div className='template-p-detail'>
                                            {contact.footerText}
                                            <a
                                        className='email__design-s'
                                        href="mailto:gpowell@ourstockisrising.com"
                                        target='_blank'> {contact.footerEmail}</a>
                                    </div>                          
                                    <hr className='show-break-style'/>

                                    <div className='template-p-detail'>
                                            {/* You can also reach us by phone */}
                                            <a
                                        className='email__design-s'
                                        href='tel:+1-937-555-1212'
                                        target='_blank'> {contact.footerPhone}</a>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            {/*  Arrow Down */}
                {/* <a href="#about" className="arrow-down smooth-scroll" style={{color: '#213805'}}>
                    <IoIosArrowDown icon="fa-solid fa-angle-down" />
                </a> */}
            </section>


            <Statement/>
        </>
    );
}

export default Contact;

