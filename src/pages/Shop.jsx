import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight,
    FaInstagram, FaRegEye, FaRegHandshake,
    FaTiktok,
    FaTwitter,
    FaYoutube,
    FaAmazon,
    FaShoppingCart
} from "react-icons/fa";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";

import {AiOutlineAmazon} from 'react-icons/ai'

import {images} from "../constants";

import './scss/Gallery.scss';

import {Services, Statement, About as AboutSection, Brands, Testimonials} from "../container";


import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";
import videoBgMp4 from "../assets/our-stock-is-rising.mp4";
import {AiOutlineLineChart} from "react-icons/ai";


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function Shop() {
    const [shop, setShop] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();




    useEffect(() => {
        client.fetch(`*[_type == "shop" && slug.current == 'shop']{
            name,
            _id,
            slug,
            preheading,
            heading,
            description,
            bookLink,
            bookText,
            amazonLink,
            amazonText,
            footerText,
            footerEmail,
            imageUrl{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data) => setShop(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!shop) return (
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
                            {shop.name}
                            </span></h1>
                        </div>
                    </div>
                </div>
            </div>


            <section id="about" style={{ paddingTop: '120px', paddingBottom: '120px', display: 'table', width: '100%'}}>
                <div className="about-01" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <div className="container">
                        <div className="row col-mobile-top" style={{justifyContent: 'center'}}>
                            {/* Left Side */}
                            <div className="col-md-5 col-sm-6">
                                <div className="mobile__hide-image column-show map-color-7 influencer-image" style={{marginTop: '0'}}>
                                    <div className="portfolio-item">
                                        <img 
                                            src={urlFor(shop.imageUrl).url()} 
                                            // src={images.book} 
                                            className="influencer-image-2" 
                                            alt=""
                                        />
                                        <div className="portfolio-item-overlay margin-top-g">
                                            <div className="portfolio-item-details text-center">
    

                                                <div className='show-button'>
                                                    {shop.amazonLink && (
                                                        <a href={shop.amazonLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                {/* <FaInstagram/> */}
                                                                <FaAmazon/>
                                                            </button>
                                                        </a>
                                                    )}

                                                    {shop.bookLink && (
                                                        <a href={shop.bookLink} target='_blank'>
                                                            <button className='btn btn-social-influencer-img btn-social-img
                                                            btn-social-facebook'>
                                                                <FaShoppingCart/>
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
                            <div className="col-md-7 col-sm-12 col-mobile" style={{display: 'table'}}>
                                <div className="about-right" style={{display: 'table-cell'}}>
                                    <div className="horizontal-heading main-about" style={{color: '#000'}}>
                                        <h5 style={{color: '#000'}}>{shop.preheading}</h5>
                                        <h2> <strong ></strong>{shop.heading}</h2>
                                    </div>

                                    {/* <p className="about-text" style={{marginLeft: '80px', marginRight: '80px'}}>Our Stock is Rising" is a classroom activity originally developed in 2000 in response to students' disinterest in the Business section of the local newspaper during a Social Studies current events review.  I took it as a personal challenge to design an ongoing activity that incorporated the basic principles of an elementary curriculum to teach students the fundamentals of the stock market.  </p> */}

                                    {/* <hr style={{margin: '2rem', border: '2px solid #213805'}}/> */}



                                           

                                    <div className='show-button-page'>   

                                        <hr style={{margin: '1rem'}}/>                        
                                                                            
                                            <div class="basic-card basic-card-aqua " style={{margin: '0 auto'}}>
                                                <div class="card-link-b" style={{padding: '7px', borderTop: '0', }}>
                                                    <a href={shop.bookLink} target='_blank' title="Read Full" style={{backgroundColor: 'none'}}><span>{shop.bookText}</span></a>
                                                </div>
                                            </div>

                                        <hr style={{margin: '1rem'}}/>

                                    </div>


                                    <div className='show-button'>

                                        {/* <hr style={{margin: '0.5rem'}}/> */}


                                        <p className="about-text" style={{marginLeft: '40px', marginRight: '40px'}}>
                                    
                                    <ReactMarkdown 
                                                children={shop.description} 
                                                remarkPlugins={[remarkGfm]}   
                                                /> 
                                    </p>

                                    <hr style={{margin: '1.5rem', border: '2px solid #213805'}}/>

                                    

                                    <span>{shop.amazonText}</span>

                                    {shop.amazonLink && (
                                        <a href={shop.amazonLink} target='_blank'>
                                            <button className='btn btn-social-i btn-amazon'>
                                                {/* <FaInstagram/> */}
                                                <FaAmazon/>
                                            </button>
                                        </a>
                                    )}


                                    <hr style={{margin: '1.5rem', border: '2px solid #213805'}}/>

                                        </div>

                                    <hr className='show-break-style'/>
                                    <div className='template-p-detail'>
                                           {shop.footerText}
                                            <a
                                        className='email__design-s'
                                        href='mailto:gpowell@ourstockisrising.com'
                                        target='_blank'> {shop.footerEmail}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Statement/> */}

            {/* <Testimonials/> */}

        </>
    );
}

export default Shop;